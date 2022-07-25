const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {

const { guild } = message;

const image = await guild.bannerURL() ? { url: await guild.bannerURL() } : null;
const thumbnail = await guild.iconURL() ? {
    url: await guild.iconURL()
} : null;


message.reply({
    embeds: [{
        title: guild.name,
        description: guild.description,
        fields: [
            {
                name: "Участников:", value: `${guild.memberCount}`
            },
            {
                name: "Владелец:", value: `<@${guild.ownerId}>`
            }
        ],
        image,
        thumbnail
    }]
});
};

module.exports.help = {
    name: "server"
};