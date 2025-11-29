<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import About from "$lib/sections/About.svelte";
    import Kuvat from "$lib/sections/Kuvat.svelte";
    import Feedback from "$lib/sections/Feedback.svelte";
    import Palvelut from "$lib/sections/Palvelut.svelte";
    import Hero from "$lib/sections/Hero.svelte";
    import Yhteystiedot from "$lib/sections/Yhteystiedot.svelte";
    import Kankaat from "$lib/sections/Kankaat.svelte";
    import Hinta from "$lib/sections/Hinta.svelte";
</script>

<div class="bg-primary-black overflow-hidden">
    <div class="pt-9">
        <Navbar />
    </div>
    <Hero />
    <div class="relative">
        <About />
        <div class="gradient-03 z-0"></div>
        <Kuvat />
    </div>
    <div class="relative">
        <Palvelut />
        <div class="gradient-04 z-0"></div>
        <Kankaat />
    </div>
    <Hinta />
    <div class="relative">
        <Yhteystiedot />
        <div class="gradient-04 z-0"></div>
        <Feedback />
    </div>
    <Footer />
</div>
