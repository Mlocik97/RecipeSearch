<script setup>
	/**
	 * @type {{
	 * 		name: string,
	 * 		href: string
	 * }[]}
	 */
	const links = [
		{
			name: 'domov',
			href: '/',
		},
	];
</script>

<template>
	<header></header>
	<nav>
		<ul v-for="link in links" :key="link.href">
			<li>
				<a :href="link.href">{{ link.name }}</a>
			</li>
		</ul>
	</nav>
	<main>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</main>
	<footer></footer>
</template>

<style>
	@import url('./style.css');
</style>
