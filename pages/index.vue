<script setup>
	const prompt = ref('');
	const router = useRouter();

	async function executeSearch() {
		const data = await $fetch('/api/recipes').then((r) => r.json());
		router.push({ // after we fetch data, we redirect to page that shows these data
			path: '/results',
			query: { data: JSON.stringify(data) }
		})
	}
</script>

<template>
	<div>
		<form action="/api/recipes" method="post">
			<label for="prompt">
				<input type="text" id="prompt" v-bind="prompt">
			</label>
			<button type="submit" @click="executeSearch">Search</button>
		</form>
	</div>
</template>

<style>
@import url('~/assets/css/search.css');
</style>