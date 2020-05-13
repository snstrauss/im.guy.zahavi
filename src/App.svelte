<script>
	import { Router } from "@sveltech/routify";
	import { routes } from "@sveltech/routify/tmp/routes";

	(function redirectIfNeeded(){
		const redirect = sessionStorage.redirect;
		delete sessionStorage.redirect;
		if (redirect && redirect !== location.href) {
			history.replaceState(null, null, redirect);
		}
	})()

</script>

<style lang="scss">
	.app-container {
		border: 4px solid green;
	}
</style>

<div class="app-container">
	i am app last try?. <br>
	router: <br>
	<Router {routes}/>
</div>