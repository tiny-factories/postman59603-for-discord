const { MessageEmbed } = require("discord.js");
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

		args.push(interaction.member.user.id); // add user.id to args
		args.push(interaction.channel_id); // add channel_id to args

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
				console.log(error);
			});
    
     	await say(interaction, "Posted 🎉");


    
	},
	// async execute(bot, say, interaction, args) {
	// 	const embed = new MessageEmbed()
	// 		.setDescription(args[0].value)
	// 		.setColor("RANDOM")
	// 		.setTimestamp()
	// 		.setFooter(bot.user.username);
	// 	await say(interaction, embed);
	// },
};
