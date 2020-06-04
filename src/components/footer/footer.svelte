<script>
	import MadeWith from "./madeWith.svelte";
	import EmailMe from "./emailMe.svelte";

    export let isBigScreen;
</script>

<style lang="scss">
    .footer {
        height: var(--header-footer-height);
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 3%;

        .footer-item {
            flex: 1;
            display: flex;

            &.made {
                justify-content: flex-start;
            }

            &.email {
                justify-content: flex-end;
            }
        }
    }
</style>

<footer class="footer">
    {#if isBigScreen}
        <span class="footer-item made">
            <MadeWith />
        </span>
    {/if}
    <span class="footer-item email">
        <EmailMe email="get.guy.zahavi@gmail.com" { isBigScreen } />
    </span>
</footer>