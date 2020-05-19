<script>
    import { layout, goto, isActive } from '@sveltech/routify';

    export let onSide = false;

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
        flex-direction: row;
        align-items: flex-start;

        .nav-link {
            margin: 0;
            background: none;
            border: none;
            outline: none;

            transition: color 0.2s;
            --intensity: 0.4;
            font-weight: 100;

            color: rgba(0, 0, 0, var(--intensity));
            &.active {
                --intensity: 1;
                font-weight: 400;
            }

            &:hover:not(.active) {
                --intensity: 0.75;
            }
        }

        &.onSide {
            flex-direction: column;
            position: absolute;
            top: var(--header-height);
        }
    }
</style>

<div class="links-container" class:onSide>
    {#each navLinks as { title, path}}
        <button class="nav-link" class:active={$isActive(path)} on:click={$goto(path)}>&lt;{title} /&gt;</button>
    {/each}
</div>