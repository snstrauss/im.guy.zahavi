<script>
    import { onMount } from 'svelte';
	import { isActive } from "@sveltech/routify";

    export let path = '';
    export let onSide = false;
    export let clicked;

    let text;
    let self;

    onMount(setMySlideParams);

    let mySlideParams;
    function setMySlideParams(){

        const { width, left } = self.getBoundingClientRect();

        mySlideParams = {
            width,
            left
        };

        if($isActive(path)){
            clicked(path, mySlideParams, true);
        }

    }
</script>

<style lang="scss">
    .nav-link {
        margin: 0;
        border: none;
        outline: none;

        transition: color 0.2s;
        --intensity: 0.4;
        font-weight: 700;

        color: transparent;

        background-color: transparent;

        &:active {
            background: none;
        }

        &.active {
            --intensity: 1;
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
                color: whitesmoke;
            }
        }
    }
</style>

<button bind:this={self} class="nav-link" class:onSide class:active={$isActive(path)}
        on:click={() => clicked(path, mySlideParams)}>
    <slot/>
</button>
