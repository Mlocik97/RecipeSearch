import { pluralize, connect } from "mongoose";
import { recipes_model } from "~/schemas/recipes";

connect('127.0.0.1:27017', {
	appName: 'recipe_search'
})
pluralize(null);

const data = new recipes_model({
	recipes: [{
		name: "mushroom soup",
		category: "soup",
		text: "blablabla we do it!"
	}]
});

data.save();

export default defineEventHandler(async (event) => {
	return event;
})
