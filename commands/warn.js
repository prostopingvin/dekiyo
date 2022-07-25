const { Permissions } = require('Discord.js');
module.exports = async (bot, message, args, argsF) => {

    const user = message.mentions.users.first();

    if (!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.BAN_MEMBERS)) {
        return message.reply("� ���� �� ���������� ����");
    }
    if (!user) return message.reply("������� ������������!");

    const userMember = client.Memory.guilds[message.guild.id].members[user.id];
    if (!userMember) return message.reply("�������� ���!");

    if (userMember.warns.length >= 2) {
        const quest = {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON', //��� ��������
                    label: '��������!', //��� ��� ��������
                    customId: 'ban', //��� ID ��������
                    style: 'SECONDARY', //����� ��������
                    emoji: "", //������ ��������
                    url: null, //������ ��������
                    disabled: false //�������� �� ��������
                },
                {
                    type: 'BUTTON', //��� ��������
                    label: '�������� � �����', //��� ��� ��������
                    customId: 'noban', //��� ID ��������
                    style: 'SECONDARY', //����� ��������
                    emoji: "", //������ ��������
                    url: null, //������ ��������
                    disabled: false //�������� �� ��������
                }
            ]
        };
        const msg = await message.reply({
            embeds: [{
                title: "��������?"
            }],
            components: [quest]
        });

        const collector = await msg.createMessageComponentCollector();

        collector.on('collect', Interaction => {
            if (Interaction.user.id !== message.author.id) return message.reply({ content: "�� �� ������" });
            if (Interaction.customId == "ban") {
                msg.edit({
                    embeds: [{
                        title: "�������"
                    }],
                    components: []
                });
                const member = message.guild.members.cache.get(user.id);
                member.ban();
                userMember.warns = [];
            }

            if (Interaction.customId == "noban") {
                msg.edit({
                    embeds: [{
                        title: "�����, �������"
                    }],
                    components: []
                });
            }

        });

    } else {
        userMember.warns.push({
            id: userMember.warns.length,
            reason: argsF.slice(1).join(" ")
        });
        message.reply({ content: "���� ��������" });
    }

    /*
    userMember.warns.splice(0,1); //�� ����� ������� 1 ����
    
    */

};
module.exports.help = {
    name: "warn"
};