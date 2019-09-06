const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	start: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	about: {
		type: String,
		required: true
	},
	URL: {
		type: String,
		required: true
	},
	github: {
		type: String,
		required: true
	},
	progress: {
		type: Number,
		required: true
	}
});
module.exports = Team = mongoose.model("projects", ProjectSchema);
