<script>
    import { goto, layout } from '@sveltech/routify';
    import Stars from '../../components/stars.svelte';

    const titleTranslations = {
        "im.guy.zahavi": "<home/>"
    };

    const navLinks = $layout.children.map(({ title, path }) => ({
        title: titleTranslations[title] ? titleTranslations[title] : title,
        path
    }));

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

        header {
            border: 1px solid green;
        }

        main {
            border: 4px solid royalblue;
        }

        footer {
            border: 1px solid purple;
        }
    }
</style>


<main class="main-container">
    <Stars></Stars>
    <header>
        <nav>
            {#each navLinks as { title, path}}
                <button on:click={$goto(path)}>{title}</button>
            {/each}
        </nav>
    </header>
    <main>
        did i ruin everything?: <br>
        <slot></slot>
    </main>
    <footer>
        i am footer
    </footer>
</main>