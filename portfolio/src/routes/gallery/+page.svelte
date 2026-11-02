<script>
    import Footer from '$lib/components/Footer.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
    <title>Gallery | Ilse Löhr</title>
    <meta property="og:title" content="Gallery | Ilse Löhr" />
    <meta property="og:description" content="A gallery page which presents photographs made by Ilse Löhr." />
    <meta property="og:image" content="https://hangwithilse.com/assets/portfolio-og-preview.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:url" content="https://hangwithilse.com/gallery" />
    <meta property="og:type" content="website" />
</svelte:head>

<Nav />
<Gallery />
<Footer />