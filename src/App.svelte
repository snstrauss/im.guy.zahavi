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

<Router {routes}/>