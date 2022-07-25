const { Permissions } = require('Discord.js');

module.exports.run = async (client, message, args, prefix) => {

if (args[0] == "ping") {
    return message.reply({
        content: `Пинг Discord API: ${client.ws.ping} ms.\nПинг Discord бота: ${Math.floor(message.createdAt - message.createdAt)} ms.`
    });
}

message.reply({
    content: `Пинг Discord API: ${client.ws.ping} ms.\nПинг Discord бота: ${Math.floor(message.createdAt - message.createdAt)} ms.`
});
    console.log(`Пинг Discord API: ${client.ws.ping} ms.\nПинг Discord бота: ${Math.floor(message.createdAt - message.createdAt)} ms.`)

};

module.exports.help = {
    name: "ping"
};