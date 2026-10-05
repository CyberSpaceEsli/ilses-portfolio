<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>Impressum | Ilse Löhr</title>
	<meta
		name="description"
		content="Impress for the personal portfolio of Ilse Löhr with contact information and legal notices."
	/>
</svelte:head>

<Nav />

	<main class="min-h-content py-24 px-8 sm:px-18 md:px-24 lg:px-46">
  <div class="mx-auto flex w-full max-w-3xl flex-col gap-12">
    <header class="text-center lg:text-left">
      <h1 class="font-lalezar text-6xl leading-none tracking-tight text-coffee sm:text-7xl">
        Legal Notice
      </h1>
      <p class="mt-4 max-w-2xl text-lg leading-relaxed text-coffee/75">
        Contact, responsibility, and a brief legal notice for my personal portfolio.
      </p>
    </header>

    <section class="grid gap-10 lg:grid-cols-2 lg:divide-x lg:divide-dashed lg:divide-latte/20">
      <div class="border-b border-dashed border-latte/20 pb-10 lg:border-b-0 lg:pb-0 lg:pr-10">
        <h2 class="font-lalezar text-3xl text-coffee">Contact</h2>
        <div class="mt-4 space-y-3 text-base leading-relaxed text-coffee/85">
          <p>
            <strong class="block text-coffee">Ilse Löhr</strong>
            Web &amp; UX / UI enthusiast
          </p>
          <p>
            Email:
            <a class="text-bubble-gum hover:underline" href="mailto:ilse.lohr@googlemail.com">
              ilse.lohr@googlemail.com
            </a>
          </p>
          <p>
           LinkedIn:
            <a class="text-bubble-gum hover:underline"
              href="https://www.linkedin.com/in/ilse-l%C3%B6hr-687b681b8"
              target="_blank"
              rel="noreferrer"
            >
              View profile
            </a>
          </p>
        </div>
      </div>

      <div class="lg:pl-10">
        <h2 class="font-lalezar text-3xl text-coffee">Legal</h2>
        <div class="mt-4 space-y-4 text-base leading-relaxed text-coffee/85">
          <p>
            Responsible for content pursuant to § 18(2) MStV (German Interstate Media Treaty):
            <span class="font-medium text-coffee">Ilse Löhr</span>
          </p>
          <p>
            This portfolio serves solely for the personal presentation of projects, design work, and
            professional experience.
          </p>
          <p>
            Unless otherwise indicated, the content and images shown on this website are protected by
            copyright belonging to Ilse Löhr.
          </p>
        </div>
      </div>
    </section>
  </div>
</main>

<Footer />
