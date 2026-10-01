<script>
	import { onMount } from 'svelte';

	const badges = [
    {
      label: 'unique',
      bg: 'bg-pebble',
      text: 'text-coffee',
      rotate: 'rotate-4',
      mRotate: '-rotate-2',
      offset: '8%',
      // CHANGED: bottom-center circle in the mobile clover cluster
      pos: 'left-1/2 bottom-2 -translate-x-1/2'
    },
    {
      label: 'appealing',
      bg: 'bg-pebble',
      text: 'text-coffee',
      rotate: '-rotate-6',
      mRotate: '-rotate-16',
      offset: '38%',
      // CHANGED: top-left circle, pulled off the edge so it can't reach the text above
      pos: 'left-1 top-4'
    },
    {
      label: 'intuitive',
      bg: 'bg-pebble',
      text: 'text-coffee',
      rotate: 'rotate-5',
      mRotate: 'rotate-16',
      offset: '68%',
      // CHANGED: top-right circle
      pos: 'right-1 top-4'
    }
	];

	let hangEl;

	onMount(() => {
		if (!hangEl) return;
		hangEl.classList.add('play-hang-loose');
		const handler = () => hangEl.classList.remove('play-hang-loose');
		hangEl.addEventListener('animationend', handler, { once: true });
	});
</script>

<div class="hero min-h-content pt-10 lg:py-20 px-8 sm:px-18 md:px-24 lg:px-46">
  <div class="flex flex-col lg:flex-row items-center justify-between w-full gap-12">

    <div class="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left justify-center">
      <span class="p-1 text-bubble-gum">Hang tight with me &</span>
      <h1 class="text-5xl md:text-6xl font-lalezar font-bold mb-4">Keep the web creative.</h1>
      <p class="text-lg leading-relaxed md:mb-10 text-coffee max-w-lg">
        Because of my visual eye I notice when something's a pixel off. What drives me is the person on the other side of the screen.
        That's why I design interfaces with precision, so they feel and look:
      </p>

      <!--
        Mobile badge cluster, own contained box.
        CHANGED: explicit h-64/w-64 instead of relying on aspect-square alone
        (absolutely-positioned children don't force a height, so the box was
        collapsing and letting the badges spill onto the paragraph and button).
        CHANGED: my-8 gives it guaranteed breathing room above and below.
      -->
      <div class="w-full lg:hidden">
        <div class="relative mx-auto aspect-square h-44 w-44 max-w-full">
          {#each badges as badge}
            <div
              class="absolute z-0 {badge.pos} {badge.mRotate} {badge.bg} {badge.text}
                     flex h-20 w-20 items-center justify-center rounded-full text-sm font-semibold shadow-md"
            >
              {badge.label}
            </div>
          {/each}

          <!-- CHANGED: centered in the middle of the box (top-1/2 + -translate-y-1/2)
               instead of top-8, so it sits at the meeting point of the three circles
               like in the reference mockup, not near the bottom overlapping the button -->
          <img
            src="/assets/hang-loose-circle.svg"
            alt="hang loose icon in circle"
            class="hang-loose-icon absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <!-- Desktop clothesline -->
      <div class="relative mx-auto w-full max-w-md pt-6 lg:border-t-2 lg:border-dashed lg:border-cotton/80 lg:pt-6 lg:max-w-none">
        {#each badges as badge}
          <div
            class="absolute -translate-x-1/2 {badge.rotate} max-lg:hidden lg:block"
            style="left: {badge.offset}; top: 0;"
          >
            <!-- clothespin -->
            <svg viewBox="0 0 28 40" class="absolute left-1/2 -top-2 -translate-x-1/2 w-6 h-9 z-10">
              <rect x="4" y="2" width="20" height="30" rx="4" class="fill-sand stroke-coffee" stroke-width="1.5" />
              <line x1="14" y1="2" x2="14" y2="32" class="stroke-cotton" stroke-width="1.5" />
              <path d="M8 32 L14 40 L20 32" class="fill-coffee" stroke-width="1.5" stroke-linejoin="round" />
              <circle cx="14" cy="12" r="2" class="fill-cotton" />
            </svg>

            <!-- badge -->
            <div class="mt-5 {badge.bg} {badge.text} rounded-lg px-5 py-2.5 text-sm shadow-md">
              {badge.label}
            </div>
          </div>
        {/each}
      </div>

      <div class="mx-auto flex w-full max-w-md justify-center border-t border-dashed border-latte/20 lg:hidden">

           <a href="mailto:ilse.lohr@googlemail.com?subject=Hello&body=Hi Ilse, I'd like to get in touch..."
            class="mt-4 inline-flex items-center justify-center gap-2
                rounded-xl bg-bubble-gum px-12 py-2
                text-sm font-medium text-pebble
                transition-transform hover:scale-105"
            aria-label="Mail"
        >
            <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2.5" />
              <path d="M3 6l9 7 9-7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Mail me</span>
        </a>
     </div>
    </div>

    <div class="hidden flex-1 items-center justify-center lg:flex">
      <img bind:this={hangEl} src="/assets/hang-loose-circle.svg" alt="hang loose icon in circle" class="w-80 h-80 md:w-96 md:h-96 hang-loose-icon shrink-0" />
    </div>
  </div>
</div>