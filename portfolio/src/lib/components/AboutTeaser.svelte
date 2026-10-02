<script>
  const photos = [
    { src: '/assets/dresden.jpg', alt: 'Selfie in the car', caption: 'dresden', rotate: '-rotate-3', height: 'h-32 sm:h-36' },
    { src: '/assets/me-camera.jpg', alt: 'Sunset over the sea', caption: 'me', rotate: 'rotate-2', height: 'h-28 sm:h-32' },
    { src: '/assets/machupicc.jpg', alt: 'City tower among trees', caption: 'travel', rotate: '-rotate-5', height: 'h-24 sm:h-28' }
  ];
</script>

<section id="teaser" class="mx-auto min-h-content py-24 px-8 sm:px-18 md:px-24 lg:px-46">
    <div class="mb-12">
		<h3 class="text-5xl font-lalezar tracking-tight">
			Behind the pixels
		</h3>
		<p class="mt-4 max-w-2xl text-lg leading-relaxed">
			Born as a dutch girl, raised for a while in New Zealand, and growing up in East Germany near Dresden, I've never had one place to call home. 
            I find that feeling in nature, travel, and the outdoors, where I capture memories by camera and find creative inspirations.
		</p>

        <div class="mx-auto flex w-full max-w-md mt-2 lg:mx-0">

           <a href="/about"
            class="mt-4 inline-flex gap-2 items-center justify-center
                rounded-xl bg-bubble-gum px-8 py-2
                text-sm font-medium text-pebble hover:bg-coffee"
            aria-label="About"
        >
         <span> More about me </span>
          <!--<svg class="h-6 w-6 text-pebble" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 9H13M13.6213 4.37866L11.5 6.49998M9 5V3M6.50004 6.50001L4.37872 4.37869M5 9H3M6.50004 11.5L4.37872 13.6214M9 15V13M20 20L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>-->
          <svg class="h-5 w-5 text-pebble" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C5.6655 12 8.06036 10.8412 9.70832 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
     </div>
	</div>

    <div class="relative mx-auto w-full max-w-md px-2 pt-10 pb-4 lg:mx-0">
  <!-- clothesline -->
  <div class="absolute left-0 right-0 top-8 border-t-2 border-dashed border-cotton/80" aria-hidden="true"></div>
 
  <div class="relative flex items-start justify-center gap-4 sm:gap-8 lg:justify-start">
    {#each photos as photo}
      <div class="relative flex flex-1 flex-col items-center {photo.rotate}">
        <!-- clothespin, same as the hero badges -->
        <svg viewBox="0 0 28 40" class="absolute -top-5 left-1/2 z-10 h-7 w-5 -translate-x-1/2" aria-hidden="true">
          <rect x="4" y="2" width="20" height="30" rx="4" class="fill-sand stroke-coffee" stroke-width="1.5" />
          <line x1="14" y1="2" x2="14" y2="32" class="stroke-cotton" stroke-width="1.5" />
          <path d="M8 32 L14 40 L20 32" class="fill-coffee" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="14" cy="12" r="2" class="fill-cotton" />
        </svg>
 
        <div class="rounded-lg bg-pale-yellow p-1.5 shadow-md transition-transform hover:scale-105">
          <img
            src={photo.src}
            alt={photo.alt}
            class="w-full {photo.height} rounded-md object-cover"
          />
        </div>
 
        <span class="mt-3 rounded-full bg-pale-yellow px-3 py-1 text-xs text-coffee font-lalezar {photo.rotate} shadow-sm">
          {photo.caption}
        </span>
        </div>
         {/each}
        </div>
    </div>

</section>