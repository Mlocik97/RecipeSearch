export default defineEventHandler(async ({ data }) => {

	/** @TODO add external API */
	const recipes = await fetch('~TODO~', {
		method: "POST",
		body: JSON.stringify({
			query: data.search_prompt // or something like that. Will see when I will find external API.
		})
	}).then((r) => r.json());

	/** @TODO add recipes, you fetch from external API */
	return {
		recipes: recipes || []
	}
})