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

    function getTranslateValue(open){
        return `calc(${open ? '0%' : '-100%'} - ${slideSafeSpace})`
    }

    let isFirstRun = true;
    $: if(slideRef && onSide){
        // set initial value for when openning the menu for the fiirst time -
        // prevent "popping" of the element (default initial value is 0%, which is in the viewport)
        if(isFirstRun){
            anime.set(slideRef, {
                translateX: '-120%'
            });
        }

        anime({
            targets: slideRef,
            translateX: getTranslateValue(open),
            duration: 1000
        });
        isFirstRun = false;
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

                transform: translateX(calc(-100% - var(--slide-safe-space)));

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
