<script>
    import styles from "$lib/utils/styles.js";
    import { exploreWorlds } from "$lib/constants/index.js";
    import ShowcaseCard from "$lib/components/ShowcaseCard.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import SectionSubtitle from "$lib/components/SectionSubtitle.svelte";

    let active = $state("world-1");
</script>

<section class={styles.paddings} id="showcase">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <SectionSubtitle title="| Esittely" textStyles="text-center" />
        <SectionTitle title="Esittely töitä" textStyles="text-center" />
        <div class="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {#each exploreWorlds as world, index}
                <ShowcaseCard
                    {...world}
                    {index}
                    {active}
                    handleClick={(id) => (active = id)}
                />
            {/each}
        </div>
    </div>
</section>
