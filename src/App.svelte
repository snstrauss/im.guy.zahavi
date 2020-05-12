<script>
	import { Router } from "@sveltech/routify";
	import { routes } from "@sveltech/routify/tmp/routes";

	console.log('sessionStorage: ');
	console.log(sessionStorage);
	debugger;

	(function redirectIfNeeded(){
		console.log('redirect if needed!');
		debugger;

		const redirect = sessionStorage.redirect;
		delete sessionStorage.redirect;
		if (redirect && redirect !== location.href) {
			console.log('history replace state!');
			history.replaceState(null, null, redirect);
		}
	})()

</script>

<style lang="scss">
	.app-container {
		border: 1px solid red;
	}
</style>

<div class="app-container">
	i am app last try?. <br>
	router: <br>
	<Router {routes}/>
</div>