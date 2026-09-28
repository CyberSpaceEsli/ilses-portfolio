<script>
	// Default artwork positions (used unless a project overrides them with `pos`)
	const positions = [
		"left-8 top-2 w-[45%] -rotate-6",
		"bottom-8 right-4 h-[90%] w-[40%] rotate-3 object-cover"
	];

	// NEW: default positions for mobile + iPad (below lg). Same edges as `positions`.
	const mobilePositions = [
		"max-lg:left-0 max-lg:top-0 max-lg:w-[62%] max-lg:-rotate-3",
		"max-lg:bottom-0 max-lg:right-0 max-lg:h-auto max-lg:w-[48%] max-lg:rotate-3"
	];

	// The two small tiles next to each big card. Alternates automatically.
	const tileSets = [
		[
			{ bg: "bg-yellow-glue/60", emoji: "🤘🏼" },
			{ bg: "card-yellow-bubbles-pattern" }
		],
		[
			{ bg: "bg-pale-pink", emoji: "👌🏼" },
			{ bg: "card-hideout-pattern" }
		],
		[
			{ bg: "bg-yellow-glue", emoji: "✌🏼" },
			{ bg: "card-wiggle-pattern" }
		],
		[
			{ bg: "bg-lip-rose", emoji: "🖐🏼" },
			{ bg: "card-point-stars-light-pattern" }
		]
	];

	// To add a project: copy one object and change the values.
	// pos = desktop position, m = mobile/iPad position (optional), description = mobile/iPad text
	const projects = [
		{
			name: "WalkDD",
			category: "iOS App",
			description:
				"A hiking app for Dresden and Saxon Switzerland with clear route details at a glance.",
			frame: "lg:border-pale-yellow",
      mFrame: "max-lg:border-pale-brown", 
			images: [
				{ src: "/assets/walkDD-flyer.png", alt: "WalkDD flyer" },
				{
					src: "/assets/walkdd-phone-1.png",
					alt: "WalkDD phone",
					pos: "right-12 top-0 w-[36%] rotate-4",
					m: "max-lg:right-0 max-lg:top-[30%] max-lg:w-[48%] max-lg:rotate-3"
				}
			]
		},
		{
			name: "React UX Analyzer",
			category: "VS Code Extension",
			description:
				"A VS Code extension that spots usability issues in React components while you code.",
			frame: "lg:border-cheeck-blush",
      mFrame: "max-lg:border-pale-brown", 
			images: [
				{
					src: "/assets/react-ux-analyzer.png",
					alt: "React UX Analyzer sample project",
					pos: "left-8 top-4 w-[65%] rotate-4",
					m: "max-lg:left-0 max-lg:top-[4%] max-lg:w-[88%] max-lg:rotate-2"
				},
				{
					src: "/assets/react-ux-logo.png",
					alt: "React UX Analyzer logo",
					pos: "bottom-5 right-6 w-48 -rotate-6",
					m: "max-lg:bottom-6 max-lg:right-0 max-lg:w-[58%] max-lg:-rotate-5"
				}
			]
		},
		{
			name: "MoodChange",
			category: "iOS App",
			description: "An iOS app that helps you notice and shift your mood, one small step at a time.",
			frame: "lg:border-pebble",
      mFrame: "max-lg:border-pale-brown", 
			images: [
				{
					src: "/assets/moodchange-logo.png",
					alt: "MoodChange app icon",
					pos: "left-14 top-2 w-[30%] -rotate-3",
					m: "max-lg:left-0 max-lg:top-[38%] max-lg:w-[54%] max-lg:-rotate-6"
				},
				{
					src: "/assets/moodchange-phone.png",
					alt: "MoodChange phone",
					pos: "right-12 top-4 w-[36%] rotate-4",
					m: "max-lg:right-0 max-lg:top-0 max-lg:w-[50%] max-lg:rotate-3"
				}
			]
		},
		{
			name: "jinx",
			category: "Web Dashboard",
			description: "A web dashboard that turns complex data into a clear, easy-to-scan overview.",
			frame: "lg:border-lip-rose",
      mFrame: "max-lg:border-pale-brown", 
			images: [
				{
					src: "/assets/jinx-dashboard.png",
					alt: "jinx dashboard",
					pos: "top-1 right-10 w-[52%] -rotate-6",
					m: "max-lg:right-0 max-lg:top-0 max-lg:w-[80%] max-lg:-rotate-3"
				},
				{
					src: "/assets/jinx-logo.svg",
					alt: "jinx logo",
					pos: "left-8 top-0 w-48 rotate-2",
					m: "max-lg:left-0 max-lg:top-[42%] max-lg:w-[46%] max-lg:rotate-3"
				}
			]
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
	<div class="flex flex-col gap-4">
		{#each projects as project, i}
			{@const flipped = i % 2 === 1}
			{@const tiles = tileSets[i % 4]}

			<!-- CHANGED: 1 column below lg, 4x2 grid from lg -->
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">

				<!-- Big project card (CHANGED: grid placement only from lg) -->
				<article
					class="card overflow-hidden rounded-4xl bg-cotton lg:col-span-3 lg:row-span-2 lg:row-start-1
					       {flipped ? 'lg:col-start-2' : 'lg:col-start-1'}"
				>
					<!-- CHANGED: smaller padding + no forced min height below lg -->
					<div class="relative flex h-full flex-col justify-between gap-5 p-5 sm:p-8 lg:min-h-95 lg:gap-0">

						<!-- CHANGED: square artwork area below lg, flexible from lg -->
						<div class="relative max-lg:mx-auto max-lg:aspect-square max-lg:w-full max-lg:max-w-md lg:flex-1">
							{#each project.images as img, j}
								<img
									src={img.src}
									alt={img.alt}
									class="absolute rounded-2xl border-[7px]
	                {img.pos ?? positions[j]} {img.m ?? mobilePositions[j]}
	                {project.frame} {project.mFrame ?? project.frame.replace('lg:', 'max-lg:')}"
								/>
							{/each}
						</div>

						<!-- CHANGED: caption + description (description only below lg) -->
						<div class="flex flex-col gap-3">
							<div class="flex flex-wrap items-baseline gap-x-2 text-xl">
								<span class="font-lalezar font-medium">{project.name}</span>
								<span class="text-base-content/50 text-[16px]">{project.category}</span>
							</div>
							<p class="text-base leading-relaxed text-base-content/70 lg:hidden">
								{project.description}
							</p>
						</div>

					</div>
				</article>

				<!-- Two small tiles (CHANGED: hidden below lg) -->
				{#each tiles as tile, t}
					<div
						class="hidden rounded-4xl lg:block {tile.bg}
						       {flipped ? 'lg:col-start-1' : 'lg:col-start-4'}
						       {t === 0 ? 'lg:row-start-1' : 'lg:row-start-2'}"
					>
						{#if tile.emoji}
							<div class="flex h-full items-center justify-center">
								<div class="text-6xl hang-loose-icon">
									{tile.emoji}
								</div>
							</div>
						{/if}
					</div>
				{/each}

			</div>
		{/each}
	</div>
</section>