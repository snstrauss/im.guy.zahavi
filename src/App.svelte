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

<!-- Global Styles -->
<style>
	:global(:root) {
		--header-footer-height: 8vh;
		--transition-time: 0.5s;
		--transition-easing: cubic-bezier(0.77,0.2,0.05,1.0);

		--transition-params: var(--transition-time) var(--transition-easing);

		--nav-link-grey: #ababab;
	}
	:global(html, body) {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	:global(body) {
		color: #333;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}

	:global(a) {
		color: rgb(0,100,200);
		text-decoration: none;
	}

	:global(a:visited) {
		color: rgb(0,80,160);
	}

	:global(label) {
		display: block;
	}

	:global(input, button, select, textarea) {
		font-family: inherit;
		font-size: inherit;
		padding: 0.4em;
		margin: 0 0 0.5em 0;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
	}

	:global(input:disabled) {
		color: #ccc;
	}

	:global(input[type="range"]) {
		height: 0;
	}

	:global(button) {
		color: #333;
		background-color: #f4f4f4;
		outline: none;
	}

	:global(button:disabled) {
		color: #999;
	}

	:global(button:not(:disabled):active) {
		background-color: #ddd;
	}

	:global(button:focus) {
		border-color: #666;
	}
</style>