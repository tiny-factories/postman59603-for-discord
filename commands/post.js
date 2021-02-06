const axios = require("axios");
const qs = require("qs");

module.exports = {
	name: "post",
	description: "Sends post to external source",
	options: [
		{
			name: "TinyGarden",
			description: "Sends this post to the TinyGarden",
			type: 3,
			required: true,
		},
	],
	async execute(_bot, say, interaction, args) {
		// console.info(interaction.member.user.id);
		// console.info(interaction.channel_id);

		args.push(interaction.member.user.id);
		args.push(interaction.channel_id);

		var data = JSON.stringify(args);
		// console.info(data);
		var config = {
			method: "post",
			url: "https://tiny-garden-server.glitch.me/api/post",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then(function(response) {})
			.catch(function(error) {
				// console.log(error);
			});
	},
};
