import { pluralize, connect } from "mongoose";

connect('127.0.0.1:27017', {
	appName: 'recipe_search'
})
pluralize(null);

export default defineEventHandler(async (event) => {
	return event;
})
