const Discord = module.require("discord.js");
const mongoose = require('mongoose');
const DiscordDB = require('simple-discord.db');
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {

    const user = message.mentions.users.first();
    const userMember = client.Memory.guilds[message.guild.id].members[users.id];
    if (!userMember) return message.reply("Человека нет!");

    userMember.money.push({
        id: userMember.money.length,
        reason: argsF.slice(1).join(" ")
    });
    message.reply({ content: "Варн добавлен" });
};


module.exports.help = {
    name: "work"
};