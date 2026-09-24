<!-- Navbar with dropdown, center logo and icon -->
<div class="navbar px-8 sm:px-18 md:px-24 lg:px-46">
  <div class="navbar-start">
    <a href="/" class="">
      <img src="/assets/ilselöhr.svg" alt="Ilse Löhr" class="h-6 w-auto" />
    </a>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="nav-links flex items-center px-1 text-[20px]">
      <li><a href="#projects" class="hover:text-bubble-gum px-2">projects</a></li>
      <li class="bg-bubble-gum h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true"></li>
      <li><a href="/about" class="hover:text-bubble-gum px-2">about</a></li>
      <li class="bg-bubble-gum h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true"></li>
      <li><a href="/gallery" class="hover:text-bubble-gum px-2">gallery</a></li>
       <li class="bg-bubble-gum h-1.5 w-1.5 rounded-full bg-pink" aria-hidden="true"></li>
      <li><a href="/resume" class="hover:text-bubble-gum px-2">resume</a></li>
    </ul>
  </div>

  <div class="navbar-end hidden lg:flex">
    <a
      href="mailto:ilse.lohr@gmail.com?subject=Hello&body=Hi Ilse, I'd like to get in touch..."
      class="group relative inline-flex h-18 w-18 items-center justify-center"
      aria-label="Mail"
    >
      <img src="/assets/letter.svg" alt="Mail closed" class="h-18 w-18 transition-opacity duration-150 group-hover:opacity-0" />
      <img src="/assets/letter-open.svg" alt="Mail open" class="absolute h-18 w-18 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      <span class="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap px-3 py-1 text-coffee bg-pebble -rotate-10 text-lg font-lalezar opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
        Mail Me!
      </span>
    </a>
  </div>

  <div class="navbar-end lg:hidden">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#projects" class="hover:text-brown">Projects</a></li>
        <li><a href="/about" class="hover:text-brown">About</a></li>
        <li><a href="/gallery" class="hover:text-brown">Gallery</a></li>
        <li><a href="/resume" class="hover:text-brown">Resume</a></li>
      </ul>
    </div>
  </div>
</div>