import { recipes_model } from '~/schemas/recipes';
import Fuse from 'fuse.js';

export default defineEventHandler(async (event) => {
	const query = getQuery(event);

	console.log(query);

	const recipe_doc = await recipes_model.find();

	console.log(recipe_doc);

	/**
	 * @TODO fix type, it's POJO
	 * 
	 * @type {typeof recipe_doc}
	 */
	const recipe_data = recipe_doc.toObject();

	const fuse = new Fuse(recipe_data, { // TODO due to performance reason, it would be better to do fuzzy search right on database (use plugin to mongoose `mongoose-fuzzy-searching`) instead of getting all results, and executing fuzySearch on results.
		keys: ['name', 'category', 'text']
	})

	const recipes = fuse.search(data.search_prompt)

	return {
		recipes: recipes || [],
	};
});
