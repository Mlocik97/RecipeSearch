import { recipes_model } from '~/schemas/recipes';
import Fuse from 'fuse.js';
import { db } from '../index.js';

export default defineEventHandler(async (event) => {
	if (!db.connection.readyState) return [];

	const data = getQuery(event);

	const recipe_doc = await recipes_model.find();

	/**
	 * @TODO fix type, it's POJO
	 * 
	 * @type {typeof recipe_doc}
	 */
	const recipe_data = recipe_doc.map((doc) => {
		const [recipe] = doc.toObject().recipes;
		return recipe;
	})

	const fuse = new Fuse(recipe_data, { // TODO due to performance reason, it would be better to do fuzzy search right on database (use plugin to mongoose `mongoose-fuzzy-searching`) instead of getting all results, and executing fuzySearch on results.
		keys: ['name', 'category', 'text']
	})

	const recipes = fuse.search(data.prompt);

	return JSON.stringify({
		recipes: recipes || [],
	});
});
