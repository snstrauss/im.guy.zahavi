<script>

    const repositoriesPromise = fetch('https://api.github.com/users/snstrauss/repos')
    .then(res => res.json())
    .then(repos => repos.map(({ full_name, language }) => ({
                   full_name,
                   language
               })));
</script>

<h1>projects page</h1>
{#await repositoriesPromise}
    <h2>waiting</h2>
{:then repos}
    <div>
        {JSON.stringify(repos, null, 2)}
    </div>
{:catch err}
    <span>error: {err}</span>
{/await}
