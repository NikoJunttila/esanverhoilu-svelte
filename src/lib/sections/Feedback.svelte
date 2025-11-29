<script>
    import Gallery from "$lib/components/Gallery.svelte";
    import styles from "$lib/utils/styles.js";
    import TitleText from "$lib/components/TitleText.svelte";
    import TypingText from "$lib/components/TypingText.svelte";

    const galleryImages = [
        { img: "/gallery1.jpg" },
        { img: "/gallery2.jpg" },
        { img: "/gallery3.jpg" },
        { img: "/gallery4.jpg" },
        { img: "/gallery5.jpg" },
        { img: "/gallery6.jpg" },
        { img: "/gallery8.jpg" },
        { img: "/gallery9.jpg" },
        { img: "/gallery10.jpg" },
    ];
</script>

<section class={styles.paddings} id="gallery">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <TypingText title="| Galleria" textStyles="text-center" />
        <TitleText
            title="Kuvia aikaisemmista töistä"
            textStyles="text-center"
        />
        <Gallery {galleryImages} />
    </div>
</section>
