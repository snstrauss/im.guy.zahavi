<script>
    import { layout, goto, isActive } from '@sveltech/routify';

    const titleTranslations = {
        "im.guy.zahavi": "Guy"
    };

    const navLinks = $layout.children.map(({ title, path }) => ({
        title: titleTranslations[title] ? titleTranslations[title] : title,
        path
    }));
</script>

<style lang="scss">
    .links-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        position: absolute;
        top: var(--header-height);

        .nav-link {
            margin: 0;
            background: none;
            border: none;
            outline: none;

            color: rgba(0, 0, 0, 0.5);
            transition: color 0.2s;
            &:hover, &.active {
                color: rgba(0, 0, 0, 1);
            }
        }
    }
</style>

<div class="links-container">
    {#each navLinks as { title, path}}
        <button class="nav-link" class:active={$isActive(path)} on:click={$goto(path)}>&lt;{title} /&gt;</button>
    {/each}
</div>