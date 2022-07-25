const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {

	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#43e2f7')
		.setTitle('Приветик :>')
		.setDescription(':^Мы любим вас!^:')
		.setTimestamp()
		.setFooter({
			text: 'Ваш бот Dekiyo © 2021'
		});

	message.channel.send({ embeds: [exampleEmbed] });

};
module.exports.help = {
    name: "hi"
};