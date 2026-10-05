<script>
    import Footer from '$lib/components/Footer.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
    <title>Gallery | Ilse Löhr</title>
    <meta
        name="description"
        content="A gallery page which presents photographs made by Ilse Löhr."
    />
</svelte:head>

<Nav />
<Gallery />
<Footer />