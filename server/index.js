import { pluralize } from "mongoose";

pluralize(null);

export default defineEventHandler(async (event) => {
	return event;
})
