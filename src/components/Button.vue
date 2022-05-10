<template>
	<button>{{ label }}</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		label: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
button {
	background: #001D6E;
	color: #FEE2C5;
	border: 0;
	padding: 1rem 1.5rem;
}
</style>
