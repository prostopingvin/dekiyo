const { Permissions } = require('Discord.js');
module.exports.run = async (client, message, args, prefix) => {

    if (!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.BAN_MEMBERS)) {
        return message.reply("У вас недостаточно прав!");
    }
    const user = message.mentions.users.first();
    if (!user) return message.reply("Укажите пользователя!");
    const userMember = message.guild.members.cache.get(user.id);

    if (userMember.bannable) {
        userMember.ban();
        return message.reply({
            embeds: [{
                title: "BAN",
                description: "Пользователь заблокирован: " + `${userMember}`,
                color: "RED"
            }]
        });
    } else return message.reply("У вас или у меня недостаточно прав для блокировки этого пользователя!");



};

module.exports.help = {
    name: "ban"
};