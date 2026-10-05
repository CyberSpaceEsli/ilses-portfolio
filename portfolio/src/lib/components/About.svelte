<script>

   let galleryClicked = $state(false);
   let aboutClicked = $state(false);

    const passions = [
    {
      title: 'Photography',
      bg: 'bg-pebble',
      text: 'Capturing moments and perspectives through my camera lens.',
      rotate: '-rotate-1'
    },
    {
      title: 'Reading',
      bg: 'bg-pebble',
      text: 'Gaining new perspectives through books and papers.',
      rotate: 'rotate-1'
    },
    {
      title: 'Travel & Outdoors',
      bg: 'bg-pebble',
      text: 'Always planning the next trip or hike.',
      rotate: 'rotate-1'
    },
    {
      title: 'Volleyball & Badminton',
      bg: 'bg-pebble',
      text: 'Keeping myself active and healthy through sports.',
      rotate: '-rotate-1'
    }
  ];

   const circles = [
    {
      bg: 'bg-bubble-gum',
      size: 'h-10 w-10 lg:h-16 lg:w-16',
      z: 'z-0',
      pos: '-top-2 left-2 md:top-4 md:left-3 lg:top-2 lg:left-2'
    },
    {
      bg: 'bg-yellow-glue',
      size: 'h-10 w-10 lg:h-14 lg:w-14',
      z: 'z-0',
      pos: '-right-5 bottom-10 md:right-2 md:bottom-6 lg:-right-3 lg:bottom-16'
    },
    {
      bg: 'bg-latte',
      size: 'h-10 w-10 lg:h-16 lg:w-16',
      z: 'z-15',
      pos: '-bottom-2 left-4 md:bottom-8 md:left-2 lg:bottom-3 lg:left-2'
    }
  ];

</script>

<main class="min-h-content px-8 py-24 sm:px-18 md:px-24 lg:px-46">
  <div class="mx-auto">

    <!-- Intro -->
    <div class="md:px-10">
    <section class="flex flex-col lg:flex-row items-center justify-between">
      <div class="mb-10 md:mb-0 md:w-1/2 md:px-10">
       <!--<div class="relative h-32 w-32 shrink-0 md:h-64 md:w-64 lg:h-85 lg:w-85">
        <span class="absolute left-2 top-2 h-16 w-16 rounded-full bg-latte border-4 border-pebble"></span>
        <span class="absolute -right-3 bottom-16 h-14 w-14 rounded-full bg-yellow-glue border-4 border-pebble"></span>

        <div class="absolute inset-0 overflow-hidden rounded-full border-4 border-pebble bg-coffee text-pebble shadow-sm">
          <img
            src="/assets/p8.png"
            alt="Portrait of Ilse Löhr"
            class="absolute -bottom-5 -rotate-6 left-1/2 h-[98%] w-[82%] -translate-x-1/2 rounded-full object-cover object-top"
          />
        </div>

        <span class="absolute bottom-3 left-2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-pebble bg-bubble-gum"></span>
      </div>
      </div>-->

      <div class="relative h-32 w-32 shrink-0 md:h-64 md:w-64 lg:h-85 lg:w-85">
        
        <div class="absolute z-10 inset-0 flex items-center justify-center rounded-full border-4 border-coffee bg-pebble text-pebble shadow-sm">
          <img src="/assets/p8.png" alt="Portrait of Ilse Löhr" class="h-full w-full rounded-full object-cover object-top" />
        </div>
        {#each circles as c}
          <span class="absolute {c.z} {c.pos} {c.size} rounded-full {c.bg} border-4 border-coffee"></span>
        {/each}
      </div>
      </div>

      <div class="md:w-1/2 text-center lg:text-left">
        <p class="p-1 text-bubble-gum">A little about me &</p>
        <h1 class="text-5xl md:text-6xl font-lalezar font-bold mb-4">Hi, I'm Ilse.</h1>
        <p class="text-lg mb-4 leading-relaxed md:mb-2 text-coffee md:max-w-xl lg:max-w-xl">
          Born in the Netherlands, but based in Dresden, Germany (open to relocation), I’m fluent in German, Dutch, and English. 
          With a Master’s in Web Engineering, I bring a passion for creating intuitive, unique, and inclusive digital experiences, backed by a strong eye for detail. 
          I'm now looking for a position where I can help take your digital products to the next level.
        </p>
       
      </div>
    </section>
    </div>

    <!-- Passions -->
    <section>
      <h3 class="font-lalezar text-5xl tracking-tight text-coffee pt-24">What I'm into</h3>
      <p class="mt-4 text-lg leading-relaxed mb-2 max-w-lg">
			In my free time, I enjoy various activities that keep me inspired and balanced. Most often, you'll find me with my camera at hand, capturing moments.
      <span class="lg:whitespace-nowrap">Don't hesitate to browse my work: </span>
		  </p>
      <a href="/gallery"
            onclick={() => (galleryClicked = true)}
            class="group relative inline-flex gap-2 items-center justify-center overflow-hidden
                mt-4 rounded-xl bg-coffee px-8 py-2
                text-sm font-medium text-pale-yellow"
            aria-label="Gallery"
        >
        <span
          aria-hidden="true"
          class="pointer-events-none absolute left-0 top-0 h-48 w-48 -translate-y-1/2 rounded-full bg-latte opacity-0 transition-all duration-500 ease-out
            {galleryClicked ? 'translate-x-[-5%] opacity-100' : 'translate-x-[-170%] group-hover:translate-x-[-5%] group-hover:opacity-100'}"
        ></span>
         <span class="relative z-10"> See photo gallery </span>
          <svg class="relative z-10 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFF8E0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 10V6C4 4.89543 4.89543 4 6 4H12M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V15M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8481 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5864L15.7901 12.4679C16.4651 11.9279 17.4053 11.8855 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5301L20 14.1901M20 14.1901V6C20 4.89543 19.1046 4 18 4H17M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#FFF8E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
    
      <div class="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 sm:gap-x-14 text-center">
        {#each passions as p}
          <div class="relative border-t-2 border-dashed border-cotton/80 pt-2">
            <!-- clothespin -->
            <svg viewBox="0 0 28 40" class="absolute left-1/2 -top-5 -translate-x-1/2 h-9 w-6 z-10">
              <rect x="4" y="2" width="20" height="30" rx="4" class="fill-sand stroke-coffee" stroke-width="1.5" />
              <line x1="14" y1="2" x2="14" y2="32" class="stroke-cotton" stroke-width="1.5" />
              <path d="M8 32 L14 40 L20 32" class="fill-coffee" stroke-width="1.5" stroke-linejoin="round" />
              <circle cx="14" cy="12" r="2" class="fill-cotton" />
            </svg>
    
            <div class="{p.rotate} rounded-xl {p.bg} px-6 py-5 shadow-md">
              <div class="flex items-center justify-center gap-3">
                <h3 class="font-lalezar text-lg text-coffee">{p.title}</h3>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-coffee/75">{p.text}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Work experience -->
    <section>
      <h3 class="font-lalezar text-5xl tracking-tight text-coffee pt-24">Work experience</h3>
      <div class="mt-10 flex flex-col divide-y divide-dashed divide-latte/40">
        <div class="flex items-start gap-5 py-6">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-pebble bg-coffee font-lalezar text-sm text-pebble">
            <!-- swap for: <img src="/assets/logos/fraunhofer.svg" alt="Fraunhofer IWU logo" class="h-8 w-8 object-contain" /> -->
            FH
          </div>
          <div class="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between sm:gap-8">
            <div>
              <h3 class="font-medium text-coffee">Student Research Assistant</h3>
              <p class="text-sm text-coffee/60">Fraunhofer IWU</p>
              <p class="mt-2 max-w-md text-sm leading-relaxed text-coffee/80">Built a pipeline that checks software vulnerabilities by integrating vulnerability detection tools, applied to a real software project.</p>
            </div>
            <span class="mt-4 md:mt-0 shrink-0 text-sm text-coffee/60">April 2023 – Dez. 2025</span>
          </div>
        </div>
        <div class="flex items-start gap-5 py-6">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-pebble bg-coffee font-lalezar text-sm text-pebble">
            <!-- swap for: <img src="/assets/logos/ostec.svg" alt="ostec GmbH logo" class="h-8 w-8 object-contain" /> -->
            OS
          </div>
          <div class="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between sm:gap-8">
            <div>
              <h3 class="font-medium text-coffee">Trainee Role — Webmaster</h3>
              <p class="text-sm text-coffee/60">ostec GmbH</p>
              <p class="mt-2 max-w-md text-sm leading-relaxed text-coffee/80">Maintained, optimized, and developed the company websites within a Holacracy-run organization.</p>
            </div>
            <span class="mt-4 md:mt-0 shrink-0 text-sm text-coffee/60">Sept. 2020 – Aug. 2023</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section>
      <h3 class="font-lalezar text-5xl tracking-tight text-coffee pt-24">Education</h3>
      <div class="mt-10 flex flex-col divide-y divide-dashed divide-latte/40">
        <div class="flex items-start gap-5 py-6">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-pebble bg-coffee font-lalezar text-sm text-pebble">
            <!-- swap for: <img src="/assets/logos/tu-chemnitz.svg" alt="Chemnitz University of Technology logo" class="h-8 w-8 object-contain" /> -->
            TU
          </div>
          <div class="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between sm:gap-8">
            <div>
              <h3 class="font-medium text-coffee">M.Sc. Web Engineering</h3>
              <p class="text-sm text-coffee/60">Chemnitz University of Technology</p>
              <p class="mt-2 max-w-md text-sm leading-relaxed text-coffee/80">Taught the technical foundations of the World Wide Web, along with practical skills in developing and managing complex web-based software systems. <span class="block text-coffee">Final grade: 1.5</span></p>
            </div>
            <span class="mt-4 md:mt-0 shrink-0 text-sm text-coffee/60">Sept. 2023 – March 2026</span>
          </div>
        </div>
        <div class="flex items-start gap-5 py-6">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-pebble bg-coffee font-lalezar text-sm text-pebble">
            <!-- swap for: <img src="/assets/logos/dhsn.svg" alt="Dual University Saxony logo" class="h-8 w-8 object-contain" /> -->
            DH
          </div>
          <div class="flex flex-1 flex-col gap-1 sm:flex-row sm:justify-between sm:gap-8">
            <div>
              <h3 class="font-medium text-coffee">B.Eng. Media Informatics</h3>
              <p class="text-sm text-coffee/60">Dual University Saxony, Dresden</p>
              <p class="mt-2 max-w-md text-sm leading-relaxed text-coffee/80">Learned the foundations of computer science and digital media processing. <span class="block text-coffee">Final grade: 1.7</span></p>
            </div>
            <span class="mt-4 md:mt-0 shrink-0 text-sm text-coffee/60">Sept. 2020 – Aug. 2023</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24">
      <h3 class="font-lalezar text-5xl tracking-tight text-coffee">What I bring to a team</h3>
      <p class="mt-4 max-w-lg text-lg leading-relaxed">
			My qualities shape how I approach challenges. Generally I want to be a valuable addition to any team,
      contributing positively to the work environment.
		  </p>
      <div class="mt-10 flex flex-wrap gap-3">
        <span class="inline-flex items-center gap-2 rounded-full bg-pebble border-2 border-coffee px-4 py-2 text-sm text-coffee">
          <svg class="h-4 w-4 text-coffee" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#281911"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 14V20M8 20L4 20V9.99998H8L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20M8 20H12" stroke="#281911" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Problem-solving skills
        </span>
        <span class="inline-flex items-center gap-2 rounded-full bg-pebble border-2 border-coffee px-4 py-2 text-sm text-coffee">
        <svg class="h-4 w-4 text-coffee" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#281911"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6M12 16H19C19.5523 16 20 15.5523 20 15V10" stroke="#281911" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Technical know-how
        </span>
        <span class="inline-flex items-center gap-2 rounded-full bg-pebble border-2 border-coffee px-4 py-2 text-sm text-coffee">
          <svg class="h-4 w-4 text-coffee" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#281911"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M15 9H15.01M9 9H9.01M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.3345 3 6.93964 4.15875 5.29168 6" stroke="#281911" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          User-centered mindset
        </span>
        <span class="inline-flex items-center gap-2 rounded-full bg-pebble border-2 border-coffee px-4 py-2 text-sm text-coffee">
          <svg class="h-4 w-4 text-coffee" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#281911"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12C2 12 5.63636 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9" stroke="#281911" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Eye for detail
        </span>
        <span class="inline-flex items-center gap-2 rounded-full bg-pebble border-2 border-coffee px-4 py-2 text-sm text-coffee">
          <svg class="h-4 w-4 text-coffee" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#281911"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 9H13M13.6213 4.37866L11.5 6.49998M9 5V3M6.50004 6.50001L4.37872 4.37869M5 9H3M6.50004 11.5L4.37872 13.6214M9 15V13M20 20L12 12" stroke="#281911" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Curious & always learning
        </span>
      </div>
    </section>

  </div>
</main>
