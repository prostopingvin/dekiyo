const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {
const user = message.mentions.users.first();
const { author } = message;
const url = await(user ? user : author).avatarURL({ dynamic: true, size: 512 });
if (!url) return message.reply("У него нет авы!");

message.reply({
    embeds: [{
        description: 'Аватар указанного пользователя',
        image: { url }
    }]
});

    
};
module.exports.help = {
    name: "avatar"
};