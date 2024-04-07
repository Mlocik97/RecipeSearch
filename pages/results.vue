<script setup>
	const route = useRoute();

	/**
	 * @type {{
	 * 		name: string
	 * 		text: string,
	 * 		category: string
	 * }[]}
	 */
	const recipes = JSON.parse(route.query.data).recipes.map(
		(recipe) => recipe.item,
	);
</script>

<template>
	<div>
		<table>
			<tr>
				<th>name</th>
				<th>category</th>
				<th>recipe text</th>
			</tr>
			<tr v-for="recipe in recipes || []">
				<td>{{ recipe.name }}</td>
				<td>{{ recipe.category }}</td>
				<td>{{ recipe.text }}</td>
			</tr>
		</table>
	</div>
</template>

<style>
	@import url('~/assets/css/results.css');
</style>
