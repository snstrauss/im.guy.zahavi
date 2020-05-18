<script>
    import { goto, layout } from '@sveltech/routify';

    const titleTranslations = {
        "im.guy.zahavi": "Guy"
    };

    const navLinks = $layout.children.map(({ title, path }) => ({
        title: titleTranslations[title] ? titleTranslations[title] : title,
        path
    }));
</script>

<style lang="scss">
    .nav-links {
        flex: 2;
        button {
            margin: 0;
            background: none;
            border: none;
            outline: none;

            color: rgba(0, 0, 0, 0.5);
            transition: color 0.2s;
            &:hover {
                color: rgba(0, 0, 0, 1);
            }
        }
    }
</style>

<nav class="nav-links">
    {#each navLinks as { title, path}}
        <button on:click={$goto(path)}>&lt;{title} /&gt;</button>
    {/each}
</nav>