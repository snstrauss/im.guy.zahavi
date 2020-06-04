<script>
    import Iconify from '../iconify.svelte';

    const socials = [
        {
            label: 'LinkedIn',
            icon: 'ant-design:linkedin-outlined',
            url: 'https://www.linkedin.com/in/guy-zahavi/'
        },
        {
            label: 'Github',
            icon: 'fa-brands:github',
            url: 'https://github.com/snstrauss'
        },
        {
            label: 'CodePen',
            icon: 'ant-design:codepen-outlined',
            url: 'https://codepen.io/snstrauss'
        }
    ];
</script>

<style lang="scss">
    .socials {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-right: 5%;
        max-width: 10em;

        a.social-icon {
            text-decoration: none;
            position: relative;

            color: white;
            opacity: 0.8;

            transition: opacity 0.2s linear;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>

<section class="socials">
    {#each socials as {label, icon, url}}
        <a href={url} target="_" class="social-icon">
            <Iconify  height="30" icon={icon}/>
        </a>
    {/each}
</section>