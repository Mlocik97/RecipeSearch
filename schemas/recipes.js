import { Schema, model } from 'mongoose';

export const recipes_schema = new Schema({
	
})

export const recipes_model = model('recipes', recipes_schema, 'recipes');