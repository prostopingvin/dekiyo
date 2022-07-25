const Discord = module.require("discord.js");
const { Permissions } = require('Discord.js');
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {

    let content = args.join("");

    if (!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        return message.channel.send("Неудача! Нет необходимых прав!");
    }
    if (!content) return message.channel.send("Неудача! Пропущен аргумент!");

    await message.channel.send(content);
    console.log(`[${message.author.tag}] отправил от имени бота:`, content);
    message.delete();
    
};


module.exports.help = {
    name: "say"
};