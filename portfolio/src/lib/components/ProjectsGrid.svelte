<script>
  const projects = [
    {
      name: "Cort.ai",
      category: "medtech, ai",
      image: "/images/cort.png",
    },
    {
      name: "Zapo",
      category: "b2b, SaaS",
      image: "/images/zapo.png",
    }
  ];
</script>

<section id="projects" class="mx-auto min-h-content py-24 px-8 sm:px-18 md:px-24 lg:px-46">

  <div class="mb-12">
    <h3 class="text-5xl font-lalezar tracking-tight">
      Projects I've had a hand in shaping
    </h3>

    <p class="mt-4 max-w-2xl text-xl leading-relaxed">
      My goal is to give digital products visibility and shape their easy feel of use
      <span class="lg:whitespace-nowrap">from first impression to everyday interaction >></span>
    </p>
  </div>


  <!-- PROJECT GRID -->
  <div class="grid grid-cols-4 grid-rows-4 gap-4">

    <!-- CORT.AI -->
    <article
      class="card col-span-3 row-span-2 overflow-hidden rounded-4xl bg-cotton"
    >
      <div class="relative flex h-full min-h-95 flex-col justify-between p-8">

        <!-- Images / artwork -->
        <div class="relative flex-1">

          <img
            src={projects[0].image}
            alt="Cort.ai project"
            class="absolute left-8 top-2 w-[75%] -rotate-6 rounded-2xl border-[7px] border-white shadow-sm"
          />

          <div
            class="absolute bottom-8 right-4 h-44 w-48 rotate-3 overflow-hidden rounded-2xl border-[7px] border-whit"
          >
            <img
              src="/images/cort-detail.png"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>

        </div>

        <!-- Caption -->
        <div class="flex items-baseline gap-2 text-xl">
          <span class="font-medium font-lalezar">WalkDD</span>
          <span class="text-base-content/50 text-[16px]">iOS App</span>
        </div>

      </div>
    </article>


    <!-- TOP RIGHT COLOUR TILE -->
    <div
      class="rounded-4xl bg-sandstein"
    >
      <div class="flex h-full items-center justify-center">
        <div class="text-6xl hang-loose-icon">🤘🏼</div>
      </div>
    </div>


    <!-- TOP RIGHT EMPTY TILE -->
    <div
      class="rounded-4xl card-overlapping-circles-pattern"
    ></div>


    <!-- BOTTOM LEFT COLOUR TILE -->
    <div
      class="col-start-1 row-start-3 rounded-4xl bg-pale-pink"
    >
      <div class="flex h-full items-center justify-center">
        <div class="text-6xl hang-loose-icon">👌🏼</div>
      </div>
    </div>


    <!-- BOTTOM LEFT EMPTY TILE -->
    <div
      class="col-start-1 row-start-4 rounded-4xl card-point-stars-pattern"
    ></div>


    <!-- ZAPO -->
    <article
      class="card col-start-2 row-start-3 col-span-3 row-span-2 overflow-hidden rounded-4xl bg-cotton"
    >
      <div class="relative flex h-full min-h-95 flex-col justify-between p-8">

        <!-- Artwork -->
        <div class="relative flex-1">

          <div
            class="absolute left-8 top-4 w-[65%] rotate-4 overflow-hidden rounded-2xl border-[7px] border-white"
          >
            <img
              src="/images/zapo.png"
              alt="Zapo project"
              class="w-full"
            />
          </div>

          <div
            class="absolute bottom-5 right-6 w-48 -rotate-6 overflow-hidden rounded-2xl border-[7px] border-white"
          >
            <img
              src="/images/zapo-mobile.png"
              alt=""
              class="w-full"
            />
          </div>

        </div>

        <!-- Caption -->
        <div class="flex items-baseline gap-2 text-xl">
          <span class="font-medium font-lalezar">React UX Analyzer</span>
          <span class="text-base-content/50 text-[16px]">VS CODE Extension</span>
        </div>

      </div>
    </article>

  </div>
</section>