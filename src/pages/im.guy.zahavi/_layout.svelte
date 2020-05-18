<script>
    import Stars from '../../components/stars.svelte';
    import Header from '../../components/header/header.svelte';

    const { isProd } = process.env;
    console.log('is prod:');
    console.log(process.env);

</script>

<style lang="scss">
    .main-container {
        height: 100%;

        background: inherit;
        background-size: inherit;

        animation: gradient-slide 100s ease infinite;

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

        overflow: hidden;

        main {
            border: 4px solid royalblue;
        }

        footer {
            border: 1px solid purple;
        }
    }
</style>


<main class="main-container">
    {#if isProd}
        <Stars></Stars>
    {/if}
    <Header/>
    <main>
        did i ruin everything?: <br>
        <slot></slot>
    </main>
    <footer>
        i am footer
    </footer>
</main>