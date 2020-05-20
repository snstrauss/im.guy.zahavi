<script>
    import Hamburger from './hamburger.svelte';
    import NavLinks from './nav-links.svelte';
    import clickOutside from '../../custom-actions/clickOutside.js';

    export let onSide = false;
    let open = false;

    function closeMenu(){
        open = false;
    }
</script>

<style lang="scss">
    .nav-menu {
        .slide-menu {
            flex: 2;

            display: flex;
            align-items: flex-start;
        }

        &.onSide {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;

            .slide-menu {
                transition: transform var(--transition-params);
                transform: translateX(-100%);

                &.open {
                    transform: translateX(0);
                }

                position: absolute;
                width: 40vw;
                height: 100%;

                background-color: #464646;
            }
        }
    }
</style>

<section class="nav-menu" class:onSide>
    <nav class="slide-menu" class:open use:clickOutside on:click_outside={closeMenu}>
        <NavLinks {onSide} itemClicked={closeMenu} />
    </nav>
    {#if onSide}
        <Hamburger bind:checked={open}/>
    {/if}
</section>
