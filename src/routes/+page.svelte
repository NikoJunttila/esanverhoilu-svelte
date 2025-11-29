<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import About from "$lib/sections/About.svelte";
  import Showcase from "$lib/sections/Showcase.svelte";
  import Gallery from "$lib/sections/gallery.svelte";
  import Services from "$lib/sections/Services.svelte";
  import Hero from "$lib/sections/Hero.svelte";
  import Contact from "$lib/sections/Contact.svelte";
  import Fabrics from "$lib/sections/Fabrics.svelte";
  import Pricing from "$lib/sections/Pricing.svelte";
</script>

<div class="bg-primary-black overflow-hidden">
  <div class="pt-9">
    <Navbar />
  </div>
  <Hero />
  <div class="relative">
    <About />
    <div class="gradient-03 z-0"></div>
    <Showcase />
  </div>
  <div class="relative">
    <Services />
    <div class="gradient-04 z-0"></div>
    <Fabrics />
  </div>
  <Pricing />
  <div class="relative">
    <Gallery />
    <div class="gradient-04 z-0"></div>
    <Contact />
  </div>
  <Footer />
</div>
