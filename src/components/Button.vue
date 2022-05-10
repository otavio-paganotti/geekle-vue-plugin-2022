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
	background: #eb5353;
	color: #f9d923;
	border: 0;
	padding: 1rem 1.5rem;
}
</style>
