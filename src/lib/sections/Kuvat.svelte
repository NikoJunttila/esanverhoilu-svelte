<script>
    import styles from "$lib/utils/styles.js";
    import { exploreWorlds } from "$lib/constants/index.js";
    import ExploreCard from "$lib/components/ExploreCard.svelte";
    import TitleText from "$lib/components/TitleText.svelte";
    import TypingText from "$lib/components/TypingText.svelte";

    let active = $state("world-1");
</script>

<section class={styles.paddings} id="explore">
    <div class="{styles.innerWidth} mx-auto flex flex-col">
        <TypingText title="| Esittely" textStyles="text-center" />
        <TitleText title="Esittely töitä" textStyles="text-center" />
        <div class="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {#each exploreWorlds as world, index}
                <ExploreCard
                    {...world}
                    {index}
                    {active}
                    handleClick={(id) => (active = id)}
                />
            {/each}
        </div>
    </div>
</section>
