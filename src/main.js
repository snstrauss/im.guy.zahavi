import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'change 4!'
	}
});

export default app;