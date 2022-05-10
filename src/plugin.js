import Button from "./components/Button.vue";

// plugins/i18n.js
export default {
	install: (app) => {
		app.component("geekle-button", Button);
	},
};
