<script>
	import { isActive } from "@sveltech/routify";

    export let path = '';
    export let onSide = false;
    export let clicked;

    let shouldAddGradient;
    $: shouldAddGradient = onSide && $isActive(path);

</script>

<style lang="scss">
    .nav-link {
        margin: 0;
        border: none;
        outline: none;

        transition: color 0.2s;
        --intensity: 0.4;
        font-weight: 100;

        color: rgba(0, 0, 0, var(--intensity));

        background-color: transparent;

        &:active {
            background: none;
        }

        &.active {
            --intensity: 1;
            font-weight: 700;
        }

        &:hover:not(.active) {
            --intensity: 0.75;
        }

        &.onSide {
            color: var(--nav-link-grey);

            &:not(.animated-gradient){
                background: none;
            }

            &.active {
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>

<button class="nav-link" class:onSide class:animated-gradient={shouldAddGradient} class:active={$isActive(path)}
        on:click={() => clicked(path)}>
    <slot/>
</button>
