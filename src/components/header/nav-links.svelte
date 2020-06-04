<script context="module">
    const titleTranslations = {
        "im.guy.zahavi": "Guy",
        "resume": "résumé"
    };

    const navOrder = ['Guy', 'projects', 'skills', 'résumé', 'about'];
</script>
<script>
	import NavLink from "./nav-link.svelte";
    import { layout, goto } from '@sveltech/routify';
    import anime from 'animejs/lib/anime.es.js';

    export let onSide = false;
    export let itemClicked;

    let containerRef;

    const navLinks = $layout.children.map(({ title, path }) => ({
        title: titleTranslations[title] ? titleTranslations[title] : title,
        path
    }))
    .sort((a, b) => {
        return navOrder.indexOf(a.title) - navOrder.indexOf(b.title);
    });

    let navSlideParams = `
        --width: 100%;
        left: 0px;
    `;
    function setNavSlideParams({ width, left }){
        anime({
            targets: containerRef,
            backgroundSize: [
                {
                    value: `${width}px`,
                    duration: 5000
                }
            ],
            backgroundPosition: [
                {
                    value: `${left}px`,
                    duration: 1000
                }
            ],
        });
    }

    function clicked(path, navSlideParams, preventNavigation){
        if(!preventNavigation){
            $goto(path);
            itemClicked();
        }

        setNavSlideParams(navSlideParams);
    }
</script>

<style lang="scss">
    .links-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        background-image: linear-gradient(90deg, white, white);
        background-repeat: no-repeat;
        background-clip: text;
        -webkit-background-clip: text;

        background-size: 100%;
        background-position: 0;

        &.onSide {
            flex-direction: column;
            position: absolute;
            top: var(--header-footer-height);
            padding-left: calc(4% + var(--slide-safe-space));
        }
    }
</style>

<div class="links-container" bind:this={containerRef} style={navSlideParams} class:onSide>
    {#each navLinks as { title, path}}
        <NavLink {onSide} {path} {clicked}>
            &lt;{title} /&gt;
        </NavLink>
    {/each}
</div>