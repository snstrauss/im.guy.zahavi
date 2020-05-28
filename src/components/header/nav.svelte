<script>
	import anime from "animejs/lib/anime.es.js";
    import Hamburger from './hamburger.svelte';
    import NavLinks from './nav-links.svelte';
    import clickOutside from '../../custom-actions/clickOutside.js';
    import { onMount } from 'svelte';

    let slideRef;
    let slideSafeSpace;
    onMount(() => {
        slideSafeSpace = getComputedStyle(slideRef).getPropertyValue('--slide-safe-space');
    });

    export let onSide = false;
    let open = false;

    function closeMenu(){
        open = false;
    }

    $: {
        anime({
            targets: slideRef,
            translateX: `calc(${open ? '0%' : '-100%'} - ${slideSafeSpace})`,
            duration: 1000
        });
    }
</script>

<style lang="scss">
    .nav-menu {
        .slide-menu {
            flex: 2;

            display: flex;
            align-items: flex-start;

            background-color: #464646;

            background-clip: text;
            -webkit-background-clip: text;
        }

        &.onSide {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;

            .slide-menu {
                --slide-safe-space: 20vw;

                background-clip: unset;
                -webkit-background-clip: unset;

                position: absolute;
                width: calc(40vw + var(--slide-safe-space));
                height: 100%;
            }
        }
    }
</style>

<section class="nav-menu" class:onSide>
    <nav class="slide-menu" use:clickOutside on:click_outside={closeMenu} bind:this={slideRef}>
        <NavLinks {onSide} itemClicked={closeMenu} />
    </nav>
    {#if onSide}
        <Hamburger bind:checked={open}/>
    {/if}
</section>
