<script>
    import Icon from 'svelte-awesome';
    import { envelopeO } from 'svelte-awesome/icons';

    export let isBigScreen;
</script>

<style lang="scss">
    .footer {
        border: 3px solid deeppink;

        height: var(--header-footer-height);
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            width: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            text-transform: uppercase;
            color: white;
            letter-spacing: min(0.5vw, 0.3em);

            &:hover {
                text-decoration-line: none;
            }
        }

        :global(.email-me-icon){
            color: white;
        }
    }
</style>

<footer class="footer">
    <a href="mailto:get.guy.zahavi@gmail.com"><Icon class="email-me-icon" data={envelopeO}/>get.guy.zahavi@gmail.com</a>
</footer>