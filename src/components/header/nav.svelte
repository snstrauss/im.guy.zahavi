<script>
    import Hamburger from './hamburger.svelte';
    import NavLinks from './nav-links.svelte';

    export let onSide = false;
    let open = false;

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

                background: linear-gradient(
                                to right,
                                hsl(0, 0%, 100%) 0%,
                                hsla(0, 0%, 100%, 0.996) 15.4%,
                                hsla(0, 0%, 100%, 0.982) 29.2%,
                                hsla(0, 0%, 100%, 0.96) 41.5%,
                                hsla(0, 0%, 100%, 0.929) 52.4%,
                                hsla(0, 0%, 100%, 0.89) 61.9%,
                                hsla(0, 0%, 100%, 0.841) 70.2%,
                                hsla(0, 0%, 100%, 0.783) 77.3%,
                                hsla(0, 0%, 100%, 0.717) 83.2%,
                                hsla(0, 0%, 100%, 0.641) 88.1%,
                                hsla(0, 0%, 100%, 0.557) 92.1%,
                                hsla(0, 0%, 100%, 0.464) 95.1%,
                                hsla(0, 0%, 100%, 0.361) 97.4%,
                                hsla(0, 0%, 100%, 0.25) 98.9%,
                                hsla(0, 0%, 100%, 0.129) 99.7%,
                                hsla(0, 0%, 100%, 0) 100%
                            );
            }
        }
    }
</style>

<section class="nav-menu" class:onSide>
    <nav class="slide-menu" class:open>
        <NavLinks />
    </nav>
    {#if onSide}
        <Hamburger bind:checked={open}/>
    {/if}
</section>
