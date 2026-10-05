<script>
  import { page } from '$app/state';

  let menuOpen = $state(false);
  let navHeight = $state(0);
  let mailClicked = $state(false);
  let resumeClicked = $state(false);

  function closeMenu() {
    menuOpen = false;
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function isActive(href) {
    if (href === '#projects') return page.url.hash === '#projects';

    return page.url.pathname === href;
  }

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    }
  });
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && closeMenu()} />

<!-- Navbar with dropdown, center logo and icon -->
<div class="navbar px-8 sm:px-18 md:px-24 lg:px-46 relative z-50" bind:clientHeight={navHeight}>
  <div class="navbar-start">
    <a href="/" onclick={closeMenu}>
      <img src="/assets/ilselöhr.svg" alt="Ilse Löhr" class="h-6 w-auto" />
    </a>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="nav-links flex items-center px-1 text-[20px]">
      <li><a href="/#projects" class={isActive('#projects') ? 'px-2 text-bubble-gum' : 'px-2 hover:text-bubble-gum'}>projects</a></li>
      <li class="bg-bubble-gum h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true"></li>
      <li><a href="/about" class={isActive('/about') ? 'px-2 text-bubble-gum' : 'px-2 hover:text-bubble-gum'}>about</a></li>
      <li class="bg-bubble-gum h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true"></li>
      <li><a href="/gallery" class={isActive('/gallery') ? 'px-2 text-bubble-gum' : 'px-2 hover:text-bubble-gum'}>gallery</a></li>
       <li class="bg-bubble-gum h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true"></li>
      <li>
        <a
          href="/resume"
          download
          title="Download CV"
          onclick={() => (resumeClicked = true)}
          class={isActive('/resume') ? 'group px-2 text-bubble-gum' : 'group px-2 hover:text-bubble-gum'}
          aria-label="Download resume as PDF"
        >  
        <span class={resumeClicked || isActive('/resume')
          ? 'inline-flex items-center border-b-2 border-dashed border-bubble-gum'
          : 'inline-flex items-center hover:border-b-2 hover:border-dashed group-hover:border-bubble-gum'}>
          <span class={resumeClicked || isActive('/resume') ? 'text-bubble-gum' : 'text-coffee hover:text-bubble-gum'}>resume</span>
          <svg
            class={resumeClicked || isActive('/resume')
              ? 'h-8 w-8 shrink-0 translate-y-1 text-bubble-gum transition-transform duration-150'
              : 'h-8 w-8 shrink-0 translate-y-0.5 text-coffee transition-transform duration-150 group-hover:translate-y-1 group-hover:text-bubble-gum'}
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M12 7L12 17L16 13M10 15L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        </a>
      </li>
    </ul>
  </div>

  <div class="navbar-end hidden lg:flex">
    <a
      href="mailto:ilse.lohr@googlemail.com?subject=Hello&body=Hi Ilse, I'd like to get in touch..."
      onclick={() => (mailClicked = true)}
      class="group relative inline-flex h-18 w-18 items-center justify-center"
      aria-label="Mail"
    >
      <img src="/assets/letter.svg" alt="Mail closed" class="h-18 w-18 transition-opacity duration-150 {mailClicked ? 'opacity-0' : 'group-hover:opacity-0'}" />
      <img src="/assets/letter-open.svg" alt="Mail open" class="absolute h-18 w-18 opacity-0 transition-opacity duration-150 {mailClicked ? 'opacity-100' : 'group-hover:opacity-100'}" />
      <span class="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap px-3 py-1 text-coffee bg-pebble -rotate-10 text-lg font-lalezar opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100 {mailClicked ? 'opacity-100' : 'group-hover:opacity-100'}">
        Mail Me!
      </span>
    </a>
  </div>

  <!-- mobile menu open/close buttons -->
  <div class="navbar-end lg:hidden">
    <button
      type="button"
      onclick={toggleMenu}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      class="relative z-50">
      {#if menuOpen}
        <svg aria-hidden="true" class="h-5 w-5 text-coffee" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      {:else}
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      {/if}
    </button>
  </div>
</div>

<!--
  full-screen mobile menu panel
-->
{#if menuOpen}
  <div
    id="mobile-menu"
    class="fixed inset-x-0 bottom-0 z-40 flex flex-col overflow-y-auto mobile-bubbles-light-pattern lg:hidden"
    style="top: {navHeight}px;"
  >

  <!-- transition:scale={{ duration: 180, start: 0.96, opacity: 0, easing: cubicOut }} -->

  <div class="flex flex-1 flex-col items-center justify-center">
    <nav class="w-full">
      <div class="bg-pale-brown flex flex-1 flex-col items-center justify-center py-12">
      <a href="/#projects" onclick={closeMenu} class={isActive('#projects') ? 'font-lalezar text-3xl py-5 text-bubble-gum' : 'font-lalezar text-3xl py-5 text-coffee'}>Projects</a>
      <div class="h-px w-40 border-t border-dashed border-latte/25"></div>

      <a href="/about" onclick={closeMenu} class={isActive('/about') ? 'font-lalezar text-3xl py-5 text-bubble-gum' : 'font-lalezar text-3xl py-5 text-coffee'}>About</a>
      <div class="h-px w-40 border-t border-dashed border-latte/25"></div>

      <a href="/gallery" onclick={closeMenu} class={isActive('/gallery') ? 'font-lalezar text-3xl py-5 text-bubble-gum' : 'font-lalezar text-3xl py-5 text-coffee'}>Gallery</a>
      <div class="h-px w-40 border-t border-dashed border-latte/25"></div>


      <a
        href="/resume"
        onclick={() => {
          resumeClicked = true;
          closeMenu();
        }}
        download
        aria-label="Download resume as PDF"
        class={resumeClicked ? 'font-lalezar text-3xl py-5 text-bubble-gum' : 'font-lalezar text-3xl py-5 text-coffee'}
      >
        Resume <span class="font-lato text-xl">[PDF]</span>
      </a>
      <div class="h-px w-40 border-t border-dashed border-latte/25"></div>

      <a href="/legal" onclick={closeMenu} class={isActive('/legal') ? 'font-lalezar text-3xl py-5 text-bubble-gum' : 'font-lalezar text-3xl py-5 text-coffee'}>Legal Notice</a>
    </div>
    </nav>

    <!-- mail + social links -->
    <div class="flex items-center justify-center gap-10 pt-6">
      <a
        href="mailto:ilse.lohr@googlemail.com?subject=Hello&body=Hi Ilse, I'd like to get in touch..."
        onclick={closeMenu}
        aria-label="Mail"
        class="text-bubble-gum"
      >
        <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2" />
          <path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>

      <a href="https://www.instagram.com/ilseloehr" aria-label="Instagram" class="inline-flex h-6 w-6 items-center justify-center transition-transform hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#FF6388"></path> </g></svg>
      </a>

      <a href="https://www.linkedin.com/in/ilse-l%C3%B6hr-687b681b8" aria-label="LinkedIn" class="inline-flex h-5 w-5 items-center justify-center transition-transform hover:-translate-y-0.5">
        <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 382 382" xml:space="preserve" fill="#FF6388" stroke="#FF6388"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#FF6388;" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path> </g></svg>
      </a>

    </div>
    </div>

  </div>
{/if}

<style>
  .mobile-bubbles-light-pattern {
    background-color: #f6f5f1;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f7ebc3' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
</style>