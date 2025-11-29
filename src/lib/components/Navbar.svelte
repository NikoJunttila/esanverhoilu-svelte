<script>
    import { fly } from "svelte/transition";
    import { inView, animations } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";

    let show = $state(false);
</script>

<div
    use:inView={{
        onEnter: () => (show = true),
        threshold: 0.1,
        once: false,
    }}
>
    {#if show}
        <nav
            transition:fly={animations.navSlideDown}
            class="{styles.xPaddings} py-8 relative"
        >
            <div class="absolute w-[50%] inset-0 gradient-01"></div>
            <div class="{styles.innerWidth} mx-auto flex justify-between gap-8">
                <img
                    src="/icon.png"
                    alt="search"
                    class="w-[50px] h-[50px] object-contain"
                />
                <h2
                    class="font-extrabold text-[24px] leading-[30px] text-white"
                >
                    Esanverhoilu
                </h2>
                <a href="#yhteystiedot">
                    <img
                        src="/menu.svg"
                        alt="menu"
                        class="w-[24px] h-[24px] object-contain"
                    />
                </a>
            </div>
        </nav>
    {/if}
</div>
