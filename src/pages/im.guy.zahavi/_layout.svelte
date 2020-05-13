<script>
    import { goto, layout } from '@sveltech/routify';

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
        border: 1px solid blue;

        header {
            border: 1px solid green;
        }

        main {
            border: 4px solid darkmagenta;
        }

        footer {
            border: 1px solid purple;
        }
    }
</style>


<main class="main-container">
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