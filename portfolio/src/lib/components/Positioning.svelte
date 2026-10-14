<script>
  const badges = [
    {
      label: 'design',
      bg: 'bg-pebble',
      text: 'text-coffee',
      size: 'w-[30%]',
      rotate: 'rotate-0',
      mRotate: 'rotate-0',
      pos: 'left-[7.5%] top-[7.4%]',
      mPos: 'left-1 top-4',
      desktopText: 'text-sm lg:text-base',
      z: 'z-10'
    },
    {
      label: 'technology',
      bg: 'bg-pebble',
      text: 'text-coffee',
      size: 'w-[30%]',
      rotate: 'rotate-0',
      mRotate: 'rotate-0',
      pos: 'right-[7.5%] top-[7.4%]',
      mPos: 'right-1 top-4',
      desktopText: 'text-sm lg:text-base',
      z: 'z-10'
    },
    {
      label: 'product',
      bg: 'bg-pebble',
      text: 'text-coffee',
      size: 'w-[30%]',
      rotate: 'rotate-0',
      mRotate: 'rotate-0',
      pos: 'left-1/2 -bottom-[5%] -translate-x-1/2',
      mPos: '-top-12',
      desktopText: 'text-sm lg:text-base',
      z: 'z-10'
    },
    {
      label: 'Me',
      bg: 'bg-coffee',
      text: 'text-pale-yellow',
      size: 'w-[24%]',
      rotate: 'rotate-0',
      mRotate: 'rotate-0',
      pos: 'left-1/2 top-[36.6%] -translate-x-1/2',
      mPos: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      desktopText: 'text-sm lg:text-base',
      z: 'z-10',
      center: true
    }
  ];
</script>

<section
  id="values"
  class="min-h-content pb-24 lg:py-20 px-8 sm:px-18 md:px-24 lg:px-46"
>
  <div
    class="grid w-full grid-cols-1 gap-10 md:gap-12 xl:grid-cols-2 lg:gap-16"
  >
    <!-- Introduction -->
    <div class="">
      <h3 class="text-5xl font-lalezar tracking-tight">
        Between design, technology & product
      </h3>
      <p class="mt-4 max-w-2xl text-lg leading-relaxed">
        With a background in computer science and a strong interest in design, I see myself as a <span class="border-b-2 border-bubble-gum hover:bg-bubble-gum p-1">Web & UI/UX enthusiast</span>. In order to craft meaningful digital experiences, I bring together user-centered thinking, frontend development and product understanding. This is how I connect the dots between how an experience serves the user, how it works, and why it matters.
		</p>

        <p class="mt-12 max-w-2xl text-lg leading-relaxed hidden xl:block">
		  I enjoy working across all three disciplines, turning first ideas into tangible prototypes, bridging the gap between design intent and technical implementation, and finding solutions to real user problems. 
      I see myself in roles such as <span class="border-b-2 border-bubble-gum hover:bg-bubble-gum p-1">UX Designer/Engineer</span> or <span class="border-b-2 border-bubble-gum hover:bg-bubble-gum p-1">Digital Technologist</span>, 
      where I can embrace emerging trends and experiment with new ways to push digital experieces forward. 
		</p>
    </div>


     <!-- Diagram -->
<div class="w-full min-w-0">
  <div
    class="relative mx-auto aspect-[560/500] w-full max-w-[580px]"
    aria-label="My qualitites lie in the middle of design, implementation and product."
  >
    <!-- Outer orbit -->
    <div
        class="absolute left-1/2 top-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-cotton/80"
        aria-hidden="true"
        ></div>

    <!-- Connection lines -->
    <div
      class="absolute left-[33%] top-[36%] h-[10%] w-px origin-top rotate-[-45deg] border border-dashed border-cotton/80"
      aria-hidden="true"
    ></div>

    <div
      class="absolute right-[33%] top-[37%] h-[10%] w-px origin-top rotate-[45deg] border border-dashed border-cotton/80"
      aria-hidden="true"
    ></div>

    <div
      class="absolute left-1/2 top-[71%] h-[10%] w-px -translate-x-1/2 -translate-y-full border border-dashed border-cotton/80"
      aria-hidden="true"
    ></div>

    <!-- Circles -->
    {#each badges as badge}
      <div
        class={`absolute ${badge.size} aspect-square rounded-full ${badge.bg} ${badge.text} ${badge.z} flex items-center justify-center text-center font-lalezar leading-tight transition-transform duration-300 hover:scale-105 ${badge.desktopText} ${badge.pos}`}
      >
        {#if badge.center}
          <span class="max-w-[85%]">
            I fit<br />
            here*
          </span>
        {:else}
          <span>{badge.label}</span>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Caption -->
  <p class="mt-10 text-center text-sm text-coffee">
    * enabling AI-powered teamwork across all the three disciplines <br> for faster and more effective results.
  </p>
</div>

     <p class="mt-4 lg:mt-12 max-w-2xl text-lg leading-relaxedn xl:hidden">
		I enjoy working across all three disciplines, turning first ideas into tangible prototypes, bridging the gap between design intent and technical implementation, and finding solutions to real user problems. 
      I see myself in roles such as <span class="border-b-2 border-bubble-gum hover:bg-bubble-gum p-1">UX Designer/Engineer</span> or <span class="border-b-2 border-bubble-gum hover:bg-bubble-gum p-1">Digital Technologist</span>, 
      where I can embrace emerging trends and experiment with new ways to push digital experieces forward. 
	</p>

  </div>


</section>