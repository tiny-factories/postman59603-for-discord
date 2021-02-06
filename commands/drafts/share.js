const axios = require("axios");
const qs = require("qs");

module.exports = {
	name: "share",
	description: "tell us about somethings you want to share on the tiny factores twitter or newsletter",
	options: [
		{
			name: "Post",
			description: "Share on: Twitter, TinyLetter, or Both",
			type: 3,
			required: true,
		},
     {
			name: "When",
			description: "anytime, soon, asap",
			type: 3,
			required: true,
		},
    {
			name: "Share",
			description: "share do you want to share?",
			type: 3,
			required: true,
		},
	],
	async execute(_bot, say, interaction, args) {
		console.info(args);
		var data = JSON.stringify(args);

		var config = {
			method: "post",
			url: "https://tiny-garden-server.glitch.me/api/post",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then(function (response) {})
			.catch(function (error) {
				console.log(error);
			});
	},
};
