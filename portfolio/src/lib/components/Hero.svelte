<script>
	import { onMount } from 'svelte';

	const badges = [
		{ label: 'unique', bg: 'bg-pebble', text: 'text-coffee', rotate: '-rotate-3', offset: '8%' },
		{ label: 'appealing', bg: 'bg-pebble', text: 'text-coffee', rotate: 'rotate-5', offset: '38%' },
		{ label: 'intuitive', bg: 'bg-pebble', text: 'text-coffee', rotate: '-rotate-7', offset: '68%' }
	];

	let hangEl;

	onMount(() => {
		if (!hangEl) return;
		// add the class to play animation once on load
		hangEl.classList.add('play-hang-loose');
		// remove it after the animation completes so hover can trigger infinite animation later
		const handler = () => hangEl.classList.remove('play-hang-loose');
		hangEl.addEventListener('animationend', handler, { once: true });
	});
</script>

<div class="hero min-h-content py-20 px-8 sm:px-18 md:px-24 lg:px-46">
  <div class="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
  
    <div class="flex-1 flex flex-col justify-center">
      <span class="p-1 text-bubble-gum">Hang tight with me &</span>
      <h1 class="text-5xl md:text-6xl font-lalezar font-bold mb-4">Keep the web creative.</h1>
      <!-- <span class="bg-linear-to-r from-bubble-gum to-lip-rose bg-clip-text font-extrabold text-transparent">creative</span> -->
      <p class="text-lg leading-relaxed mb-10 text-coffee max-w-lg">
        Because of my visual eye I notice when something's a pixel off. What drives me is the person on the other side of the screen.
        That's why I design interfaces with precision, so they feel and look: 
      </p>
      <!-- for mobile <div class="border-t border-dashed border-latte/20"></div> -->
      <div class="relative border-t-2 border-dashed border-latte/20 pt-6">
	{#each badges as badge}
		<div
			class="absolute -translate-x-1/2 {badge.rotate}"
			style="left: {badge.offset}; top: 0;"
		>
			<!-- clothespin -->
			<svg
				viewBox="0 0 28 40"
				class="absolute left-1/2 -top-2 -translate-x-1/2 w-6 h-9 z-10"
			>
				<rect x="4" y="2" width="20" height="30" rx="4" class="fill-sand stroke-coffee" stroke-width="1.5" />
				<line x1="14" y1="2" x2="14" y2="32" class="stroke-cotton" stroke-width="1.5" />
				<path d="M8 32 L14 40 L20 32" class="fill-coffee" stroke-width="1.5" stroke-linejoin="round" />
				<circle cx="14" cy="12" r="2" class="fill-cotton" />
			</svg>

			<!-- badge -->
			<div class="mt-5 {badge.bg} {badge.text} rounded-lg px-5 py-2.5 text-sm font-medium shadow-md">
				{badge.label}
			</div>
		</div>
	{/each}
    </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
	<img bind:this={hangEl} src="/assets/hang-loose-circle.svg" alt="hang loose icon in circle" class="w-80 h-80 md:w-96 md:h-96 hang-loose-icon flex-shrink-0" />
    </div>
  </div>
</div>