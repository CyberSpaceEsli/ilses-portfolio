<script>
  import { onMount } from 'svelte';
  import AboutTeaser from '$lib/components/AboutTeaser.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';

  let topMarker = $state();
  let showFloatingTop = $state(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    if (!topMarker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        showFloatingTop = !entry.isIntersecting;
      },
      { threshold: 0 }
    );

    observer.observe(topMarker);

    return () => observer.disconnect();
  });
</script>

<svelte:head>
	<title>Portfolio | Ilse Löhr</title>
	<meta
		name="description"
		content="Hang out with Ilse Löhr and keep the web creative. View her projects and get in touch."
	/>
</svelte:head>

<Nav />

<div bind:this={topMarker} class="h-px w-full" aria-hidden="true"></div>

<button
  type="button"
  onclick={scrollToTop}
  aria-label="Back to top"
  title="Back to top"
  class={`group fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-coffee text-pale-yellow shadow-lg transition-all duration-500 ease-out sm:bottom-10 sm:right-10 ${
    showFloatingTop ? 'pointer-events-auto opacity-100 translate-y-0 scale-100' : 'pointer-events-none opacity-0 translate-y-4 scale-90'
  }`}
>
  <svg viewBox="0 0 24 24"
    aria-hidden="true"
    class="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" 
    fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20V4L18 10M9 7L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</button>

<Hero />
<ProjectsGrid />
<AboutTeaser />
<Footer />