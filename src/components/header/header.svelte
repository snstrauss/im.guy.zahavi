<script>
    import Nav from './nav.svelte';
    import Socials from './socials.svelte';
</script>

<style lang="scss">
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>

<header class="header">
    <Nav />
    <Socials />
</header>