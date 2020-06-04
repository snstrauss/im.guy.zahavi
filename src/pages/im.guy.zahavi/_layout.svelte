<script>
    import Stars from '../../components/stars.svelte';
	import Footer from "./../../components/footer/footer.svelte";
    import Header from '../../components/header/header.svelte';

    const { isProd } = process.env;

    let viewWidth;
    let isBigScreen;
    $: isBigScreen = viewWidth && (viewWidth > 600);
</script>

<svelte:window bind:innerWidth={viewWidth} />

<style lang="scss">
    .main-container {
        height: 100%;
        overflow: hidden;

        display: flex;
        flex-direction: column;

        main {
            flex: 1;
        }
    }

    :global(.animated-gradient){
        background: linear-gradient(
            136deg,
            #d4c762,
            #4cc1b5,
            #4398dd,
            #f37e80
        );

        background-size: 1200% 1200%;

        animation: gradient-slide 100s ease infinite;
    }

    @keyframes gradient-slide {
        0% {
            background-position: 0% 7%;
        }
        50% {
            background-position: 100% 94%;
        }
        100% {
            background-position: 0% 7%;
        }
    }
</style>



<main class="main-container animated-gradient">
    {#if isProd}
        <Stars></Stars>
    {/if}
    <Header {isBigScreen} />
    <main>
        did i ruin everything?: <br>
        <slot></slot>
    </main>
    <Footer {isBigScreen} />
</main>