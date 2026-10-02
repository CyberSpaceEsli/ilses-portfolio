<script>
	// Default artwork positions (used unless a project overrides them with `pos`)
	const positions = [
		"left-8 top-2 w-[45%] -rotate-6",
		"bottom-8 right-4 h-[90%] w-[40%] rotate-3 object-cover"
	];

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
			href: "https://apps.apple.com/de/app/walkdd/id6761303789",
			description:
				"A hiking app for Dresden and Saxon Switzerland with clear route details at a glance.",
			frame: "lg:border-pale-yellow",
			mFrame: "max-lg:border-pale-yellow",
			hoverCircle: "fill-pebble",
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
			href: "https://marketplace.visualstudio.com/items?itemName=CyberSpaceEsli.react-ux-analyzer",
			description:
				"A VS Code extension that spots usability issues in React components while you code.",
			frame: "lg:border-cheeck-blush",
			mFrame: "max-lg:border-pale-yellow",
			hoverCircle: "fill-cheeck-blush",
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
			href: "https://apps.apple.com/de/app/walkdd/id6761303789",
			description: "An iOS app that helps you notice and shift your mood, one small step at a time.",
			frame: "lg:border-pebble",
			mFrame: "max-lg:border-pale-yellow",
			hoverCircle: "fill-yellow-glue",
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
			href: "https://jinx-team.vercel.app/",
			description: "A web dashboard that turns complex data into a clear, easy-to-scan overview.",
			frame: "lg:border-lip-rose",
			mFrame: "max-lg:border-pale-yellow",
			hoverCircle: "fill-lip-rose",
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

<section id="projects" class="mx-auto min-h-content py-24 px-8 sm:px-18 md:px-24 lg:py-20 lg:px-46">
	<div class="mb-12">
		<h3 class="text-5xl font-lalezar tracking-tight">
			Projects I've had a hand in shaping
		</h3>
		<p class="mt-4 max-w-2xl text-lg leading-relaxed">
			My goal is to give digital products visibility and shape their easy feel of use	
      <span class="lg:whitespace-nowrap">from first impression to everyday interaction. </span>
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
					class="card group relative overflow-hidden rounded-4xl bg-cotton lg:col-span-3 lg:row-span-2 lg:row-start-1
					       {flipped ? 'lg:col-start-2' : 'lg:col-start-1'}"
				>
					<div class="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-4xl lg:block z-30">
						<div class="project-hover-circle absolute left-1/2 top-1/2 h-lg w-lg rounded-full" style="width: 58rem; height: 58rem;">
							<svg viewBox="0 0 1000 1000" class="h-full w-full">
								<circle cx="500" cy="500" r="460" class={project.hoverCircle ?? 'fill-pale-yellow'} />
							</svg>

							<div class="project-hover-copy pointer-events-auto absolute left-1/2 top-1/2 z-40 w-[60%] -translate-x-1/2 -translate-y-1/2 text-left text-coffee">
								<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
									<div class="font-lalezar text-2xl leading-tight">{project.name}</div>
									<div class="text-md text-coffee/70">{project.category}</div>
								</div>
								<div class="mt-3 text-base leading-relaxed">{project.description}</div>
								<a
									href={project.href}
									class="mt-6 inline-flex items-center gap-1 border-b-2 border-dashed font-lalezar text-lg text-coffee hover:text-latte/70"
                  aria-label="Visit project"
								>
									Visit project
									<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V7L16 11M10 9L8 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
								</a>
							</div>
						</div>
					</div>

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
							<p class="text-base leading-relaxed text-coffee/70 lg:hidden">
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

<style>
	.project-hover-circle {
		transform: translate(-58%, 58%) scale(0.72);
		transform-origin: center;
		opacity: 0;
		transition:
			transform 720ms cubic-bezier(0.22, 1, 0.36, 1),
			opacity 720ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.group:hover .project-hover-circle {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}

	.project-hover-copy {
		opacity: 0;
		transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.group:hover .project-hover-copy {
		opacity: 1;
	}
</style>