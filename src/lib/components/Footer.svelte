<script>
    import { fly } from "svelte/transition";
    import { inView, animations } from "$lib/utils/animations.js";
    import styles from "$lib/utils/styles.js";

    let show = $state(false);
</script>

<div
    use:inView={{
        onEnter: () => (show = true),
        threshold: 0.25,
        once: false,
    }}
>
    {#if show}
        <footer
            transition:fly={animations.footerSlideUp}
            class="{styles.xPaddings} py-8 relative"
            id="footer"
        >
            <div class="footer-gradient"></div>
            <div class="{styles.innerWidth} mx-auto flex flex-col gap-8">
                <div class="flex flex-col">
                    <div class="mb-[50px] h-[2px] bg-white opacity-10"></div>

                    <div class="items-center text-center gap-4">
                        <p
                            class="font-normal text-[14px] text-white opacity-50"
                        >
                            Copyright © 2025 Esanverhoilu. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    {/if}
</div>
