<script>
	import Iconify from "./../iconify.svelte";
</script>

<style lang="scss">
    .container {
        opacity: 0.8;
    }
</style>

<span class="container">
    <Iconify icon="entypo-code"/>
    with
    <Iconify style={{color: '#e71837' }} icon="entypo-heart"/>
    using
    <a href="https://svelte.dev/" target="_"><Iconify style={{color: '#FF3E00'}} icon="simple-icons:svelte"/></a>
</span>