<script>
    import { goto } from '@sveltech/routify';

    console.log('layout');

    let navLinks = {
        "home": '/',
        "about": "about",
        "contact": "contact"
    };
</script>

<style lang="scss">
    .main-container {
        border: 1px solid blue;

        header {
            border: 1px solid green;
        }

        main {
            border: 4px solid deeppink;
        }

        footer {
            border: 1px solid purple;
        }
    }
</style>

<main class="main-container">
    <header>
        <nav>
            {#each Object.entries(navLinks) as [title, route]}
                <button on:click={() => $goto(route)}>{title}</button>
            {/each}
        </nav>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        i am footer
    </footer>
</main>