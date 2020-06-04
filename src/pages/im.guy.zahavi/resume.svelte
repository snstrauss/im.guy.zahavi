<script>

    let visible = false;
    function iframeLoaded(){
        visible = true;
    }

</script>
<style lang="scss">
    .container {
        display: flex;
        justify-content: center;

        iframe {
            width: 100%;
            max-width: 51.5em;

            // border: 3px solid deeppink;
            visibility: hidden;

            &.visible {
                // border: 3px solid deepskyblue;
                visibility: visible;
            }
        }
    }
</style>

<div class="container">
    {#if !visible}
        <span>WAIT</span>
    {/if}
    <iframe on:load={iframeLoaded} class:visible
        frameborder="0" scrolling="no" title="my-pdf"
        src="https://drive.google.com/file/d/13NrkNmGYpM0IRiLLgHTNzFUNdVmAaYWw/preview">
    </iframe>
</div>
