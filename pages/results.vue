<script setup>
	const route = useRoute();

	/**
	 * @type {{
	 * 		name: string
	 * 		text: string,
	 * 		category: string
	 * }[]}
	 */
	const recipes = JSON.parse(route.query.data.recipes);
</script>

<template>
	<div>
		<ul v-for="recipe in recipes || []">
			<li>
				<h5>{{ recipe.name }}</h5>
				<span>{{ recipe.category }}</span>
				<span>{{ recipe.text }}</span>
			</li>
		</ul>
	</div>
</template>

<style>
	@import url('./styles/results.css');
</style>
