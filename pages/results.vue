<script setup>
	/**
	 * @type {{
	 * 		text: string,
	 * 		link: string
	 * }[]}
	 */
	const results = [];
</script>

<template>
	<div>
		<ul v-for="result in results">
			<li>
				<span>{{ result.text }}</span>
				<a :href="result.link">Details</a>
			</li>
		</ul>
	</div>
</template>

<style>
	@import url('./styles/results.css');
</style>