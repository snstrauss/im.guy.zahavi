<script>
	import { Router } from "@sveltech/routify";
	import { routes } from "@sveltech/routify/tmp/routes";
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