<template>
	<div id="teacup" ref="dragElement">
		<div id="teacup-handle" ref="dragHandle"></div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue"
	import { useDraggability } from "vue-draggability"

	const dragElement = ref(null)
	const dragHandle = ref(null)

	onMounted(() => {
		useDraggability(dragElement, dragHandle)
	})
</script>

<style>
	#teacup {
		position: relative;
		height: 10em;
		width: 10em;

		background-color: #000;
		border-bottom-left-radius: 3em;
		border-bottom-right-radius: 3em;
	}

	#teacup-handle {
		height: 6em;
		width: 4em;
		right: -4em;

		background-color: #000;
		cursor: grabbing;
	}

	#teacup-handle::after {
		content: "";

		height: 4em;
		width: 3em;
		left: 0;

		background-color: #fff;
	}

	#teacup-handle, #teacup-handle::after {
		position: absolute;
		top: 1em;

		border-top-right-radius: 3em;
		border-bottom-right-radius: 3em;
	}
</style>
