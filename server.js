const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);

mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", {
		useNewUrlParser: true
	})
	.then(() => console.log("MongoDB connected successfully"))
	.catch(err => console.log("err " + err));
// Send every request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("/*", function(req, res) {
		res.sendFile(path.join(__dirname, "./client/build/index.html"));
	});
} else {
	app.use(express.static(path.join(__dirname, "/client/public")));
	app.get("/*", function(req, res) {
		res.sendFile(path.join(__dirname, "./client/public/index.html"));
	});
}

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
