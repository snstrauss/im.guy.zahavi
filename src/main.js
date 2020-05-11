import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'change 5!!'
	}
});

export default app;