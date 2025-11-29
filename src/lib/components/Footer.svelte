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
            class="{styles.xPaddings} py-8 relative border-t border-white/10 bg-primary-dark"
            id="footer"
        >
            <div class="{styles.innerWidth} mx-auto flex flex-col gap-8">
                <div class="flex flex-col items-center">
                    <div class="items-center text-center gap-4">
                        <h4
                            class="font-serif font-bold text-[24px] text-white mb-4"
                        >
                            ESANVERHOILU
                        </h4>
                        <p
                            class="font-normal text-[14px] text-secondary-white opacity-50"
                        >
                            Copyright © 2025 Esanverhoilu. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    {/if}
</div>
