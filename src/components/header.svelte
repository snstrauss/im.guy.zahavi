<script>
    import { goto, layout } from '@sveltech/routify';
    import Icon from 'svelte-awesome';
    import { linkedinSquare, githubSquare, codepen } from 'svelte-awesome/icons';


    const titleTranslations = {
        "im.guy.zahavi": "<home/>"
    };

    const socials = [
        {
            label: 'LinkedIn',
            icon: linkedinSquare,
            url: 'https://www.linkedin.com/in/guy-zahavi/'
        },
        {
            label: 'Github',
            icon: githubSquare,
            url: 'https://github.com/snstrauss'
        },
        {
            label: 'CodePen',
            icon: codepen,
            url: 'https://codepen.io/snstrauss'
        }
    ];

    const navLinks = $layout.children.map(({ title, path }) => ({
        title: titleTranslations[title] ? titleTranslations[title] : title,
        path
    }));

</script>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        nav {
            flex: 2;
            button {
                margin: 0;
            }
        }

        .social-links {
            flex: 1;
            display: flex;
            justify-content: space-between;
            margin-right: 5%;
            max-width: 8em;

            a {
                text-decoration: none;
                position: relative;
            }
            :global(.social-icon) {
                color: white;
                margin: 0;
                transition: color 0.7s;
                &:hover {
                    color: black;
                }

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>

<div class="header">
    <nav>
        {#each navLinks as { title, path}}
            <button on:click={$goto(path)}>{title}</button>
        {/each}
    </nav>
    <section class="social-links">
        {#each socials as {label, icon, url}}
            <a href={url} target="_">
                <Icon class="social-icon alert" data={icon} scale="2" label={label}/>
            </a>
        {/each}
    </section>
</div>