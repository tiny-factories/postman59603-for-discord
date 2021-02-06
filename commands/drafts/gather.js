const axios = require("axios");
const qs = require("qs");

module.exports = {
	name: "gather",
	description: "WIP",
	options: [
		{
			name: "title",
			description: "Sends this post to tiny Garden's Public page",
			type: 3,
			required: true,
		},
    	{
			name: "music",
			description: "Sends this post to tiny Garden's Public page",
			type: 3,
			required: false,
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
