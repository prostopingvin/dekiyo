module.exports = async (client, message) => {
    const Discord = require('discord.js')
    const config = require('./config')
        let prefix = config.prefix
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        let messageArray = message.content.split(' ')
        let command = messageArray[0]
        let args = messageArray.slice(1)


        let command_file = client.commands.get(command.slice(prefix.length))
    if (command_file) command_file.run(client, message, args, prefix);
};