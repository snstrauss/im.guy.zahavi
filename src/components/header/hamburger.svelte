<script>
    export let checked = false;
    const lines = Array(3).fill(0);
</script>

<style lang="scss">
    .hamburger {
        position: absolute;
        --distance: calc(var(--header-footer-height) / 3.5);
        top: var(--distance);
        left: var(--distance);

        input {
            position: absolute;
            width: 100%;
            height: 100%;

            z-index: 2;

            opacity: 0;
        }

        span {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;

            background-color: #333;
            border-radius: 3px;

            z-index: 1;

            transition: transform var(--transition-params),
                        background-color var(--transition-params),
                        opacity var(--transition-params);

        }

        &.checked {
            span {
                --direction: 1;
                --scale: 1;
                --translation: 0.28em;

                background-color: var(--nav-link-grey);

                opacity: 1;
                transform: translateY(calc(var(--direction) * calc(var(--translation) * 2)))
                           translateX(calc(var(--translation) * -1))
                           rotate(calc(var(--direction) * 45deg))
                           scale(calc(var(--scale) * 1));

                &.menu-line-1 {
                    --direction: 0;
                    --scale: 0;
                    opacity: 0;
                }
                &.menu-line-2 {
                    --direction: -1;
                }
            }
        }
    }
</style>

<div class="hamburger" class:checked>
    <input type="checkbox" bind:checked>
    {#each lines as _, i}
        <span class={`menu-line-${i}`}></span>
    {/each}
</div>
