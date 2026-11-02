<script>
    import Footer from '$lib/components/Footer.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
    <title>Gallery | Ilse Löhr</title>
    <meta property="og:title" content="Gallery | Ilse Löhr" />
    <meta property="og:description" content="A gallery page which presents photographs made by Ilse Löhr." />
    <meta property="og:image" content="/static/assets/portfolio-og-preview.png" />
    <meta property="og:url" content="https://hangwithilse.com/gallery" />
    <meta property="og:type" content="website" />
</svelte:head>

<Nav />
<Gallery />
<Footer />