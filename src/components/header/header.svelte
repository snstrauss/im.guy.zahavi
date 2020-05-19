<script>
    import Nav from './nav.svelte';
    import Socials from './socials.svelte';

    let viewWidth;
    let isBigScreen;
    $: isBigScreen = (viewWidth > 600);
</script>

<svelte:window bind:innerWidth={viewWidth} />

<style lang="scss">
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        height: var(--header-height);

        &.singleElement {
            justify-content: flex-end;
        }
    }
</style>

<header class="header" class:singleElement={!isBigScreen}>
    <Nav onSide={!isBigScreen} />
    <Socials />
</header>

