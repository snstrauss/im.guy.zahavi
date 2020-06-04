<script>
    import Iconify from '../iconify.svelte';

    export let email;
    export let isBigScreen = false;
</script>

<style lang="scss">
    a {
        --glow-shadow: 0 0 1px white;
        --transition-props: 0.2s linear;

        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        text-transform: uppercase;
        color: white;
        letter-spacing: min(0.5vw, 0.3em);

        transition: text-shadow var(--transition-props);
        :global(svg) {
            transition: filter var(--transition-props);
        }
        &:hover {
            text-decoration-line: none;
            text-shadow: var(--glow-shadow);

            :global(svg) {
                filter: drop-shadow(var(--glow-shadow));
            }
        }

        &.isBigScreen {
            width: 45%;
        }
    }

    :global(.email-me-icon){
        color: white;
    }
</style>

<a href={`mailto:${email}`} class:isBigScreen><Iconify height="20" icon="mdi-email-outline" />{email}</a>