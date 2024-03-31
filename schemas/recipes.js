import { Schema, model } from 'mongoose';

export const recipes_schema = new Schema({
	recipes: {
		type: [{
			name: String,
			text: String,
			category: String
		}],
	}
})

export const recipes_model = model('recipes', recipes_schema, 'recipes');