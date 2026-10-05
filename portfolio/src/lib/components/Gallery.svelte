<script>
  const photos = [
    { src: '/assets/photos/boats.JPG', alt: 'Sunset picture of fishers boats', caption: 'Fisher boats', rotate: '-rotate-1', height: 'h-32 sm:h-36 lg:64 lg:68' },
    { src: '/assets/photos/sheep.jpg', alt: 'Sheep with grass in mouth', caption: 'Sheeps', rotate: 'rotate-2', height: 'h-28 sm:h-32 lg:48 lg:50' },
    { src: '/assets/photos/thuebingen.JPG', alt: 'City of thuebingen in golden hour', caption: 'Thübingen', rotate: '-rotate-2', height: 'h-24 sm:h-28 lg:42 lg:44' }
  ];

</script>

<main class="min-h-content py-24 px-8 sm:px-18 md:px-24 lg:px-46">
  <div class="mx-auto flex w-full justify-center mb-12 md:mb-8">
    <header class="text-center">
      <h1 class="font-lalezar text-5xl md:text-6xl tracking-tight text-coffee">
        Photo Gallery
      </h1>
      <p class="text-lg leading-relaxed md:mb-10 text-coffee max-w-lg">
        Take your time and enjoy browsing through my collection of moments captured in photographs. My current gear is a Fujifilm XT-5 with a 16-50mm lens. If you're interested in a photo shoot for any occasion, please get in touch by email.
      </p>
    </header>
  </div>

    <section class="flex w-full items-center">
     <div class="relative mx-auto max-w-lg md:max-w-none w-full px-2 pt-10 pb-4 md:mx-0">
        <!-- clothesline -->
        <div class="absolute left-0 right-0 top-7 border-t-2 border-dashed border-cotton/80" aria-hidden="true"></div>
        
        <div class="relative flex items-start justify-center gap-4 sm:gap-8">
            {#each photos as photo}
            <div class="relative flex flex-1 flex-col items-center {photo.rotate}">
                <!-- clothespin, same as the hero badges -->
                <svg viewBox="0 0 28 40" class="absolute -top-5 left-1/2 z-10 h-7 w-5 -translate-x-1/2" aria-hidden="true">
                <rect x="4" y="2" width="20" height="30" rx="4" class="fill-sand stroke-coffee" stroke-width="1.5" />
                <line x1="14" y1="2" x2="14" y2="32" class="stroke-cotton" stroke-width="1.5" />
                <path d="M8 32 L14 40 L20 32" class="fill-coffee" stroke-width="1.5" stroke-linejoin="round" />
                <circle cx="14" cy="12" r="2" class="fill-cotton" />
                </svg>
        
                <div class="rounded-lg bg-pebble p-1.5 shadow-md transition-transform hover:scale-105">
                <img
                    src={photo.src}
                    alt={photo.alt}
                    class="w-full {photo.mheight} rounded-md object-cover"
                />
                </div>
        
                <span class="mt-3 rounded-full bg-pebble px-3 py-1 lg:mt-5 lg:px-5 lg:py-2 text-xs text-coffee font-lalezar {photo.rotate} shadow-sm">
                {photo.caption}
                </span>
                </div>
                {/each}
                </div>
            </div>
    </section>

        <div class="mx-auto flex w-full justify-center">
        <p class="text-lg text-coffee max-w-lg pt-10 lg:py-24">
                & more pictures are coming soon...
        </p>
        </div>

</main>