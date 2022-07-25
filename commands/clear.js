const { Permissions } = require('Discord.js');

module.exports.run = async (client, message, args, prefix) => {

    if (!message.channel.permissionsFor(client.user).has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        return message.reply("У меня не достаточно прав");
    }
    if (!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        return message.reply("У вас не достаточно прав");
    }

    if (isNaN(+args[0])) return message.reply("Укажите количество сообщений");
    const numArg = +args[0];
    if (numArg > 100) return message.reply("Укажи число удалений сообщений меньше 100");

    let num = 0;
    await message.channel.messages.fetch();
    message.channel.messages.cache.sort((a, b) => b.createdTimestamp - a.createdTimestamp);
    for (const iterator of message.channel.messages.cache) {
        if (num < numArg) num++;
        else break;
        await iterator[1].delete();
    }
    message.channel.send("Очистка завершена!");

};

module.exports.help = {
    name: 'clear'
};