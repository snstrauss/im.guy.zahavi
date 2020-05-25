<script>
	import NavLink from "./nav-link.svelte";
    import { layout, goto } from '@sveltech/routify';

    export let onSide = false;

    export let itemClicked;

    const titleTranslations = {
        "im.guy.zahavi": "Guy"
    };

    const navLinks = $layout.children.map(({ title, path }) => ({
        title: titleTranslations[title] ? titleTranslations[title] : title,
        path
    }));

    function clicked(path){
         $goto(path);
         itemClicked();
    }
</script>

<style lang="scss">
    .links-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        &.onSide {
            flex-direction: column;
            position: absolute;
            top: var(--header-height);
        }
    }
</style>

<div class="links-container" class:onSide>
    {#each navLinks as { title, path}}
        <NavLink {onSide} {path} {clicked}>&lt;{title} /&gt;</NavLink>
    {/each}
</div>