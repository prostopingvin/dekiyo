const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {

    const page1 = [' ', 'Текущий префикс бота - `d!`', '`help` - показать это меню', '`avatar` - показать аватар пользователя', '`hi` - получить приветствие от бота'];

    const action = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON',
                label: 'Назад',
                customId: 'left',
                style: 'SECONDARY',
                disabled: false
            },
            {
                type: 'BUTTON',
                label: 'Вперёд',
                customId: 'right',
                style: 'SECONDARY',
                disabled: false
            }
        ]
    };

    const helps = [
        {
            embeds: [
                {
                    title: "Первая страница",
                    description: `${page1.slice(1).join('\n')}`,
                    color: "BLUE"
                }
            ]
        },
        {
            embeds: [
                {
                    title: "Вторая страница",
                    description: "Описание для вас"
                }
            ]
        }
    ];

    for (const it of helps) it.components = [action];


    let numArg = 0;
    if (!isNaN(+args[0])) {
        numArg = +args[0];
        if (numArg < 0 || numArg > helps.length - 1) numArg = 0;
    }

    const msg = await message.channel.send(helps[numArg]);
    msg.num = numArg;

    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', Int => {
        if(Int.user.id !== message.author.id) return Int.reply("Низя");
        if(Int.customId == "left") msg.num--;
        if(Int.customId == "right") msg.num++;

        if(msg.num<0) msg.num = helps.length-1;
        if(msg.num>helps.length-1) msg.num = 0;

        Int.update(helps[msg.num]);
    });
};

module.exports.help = {
    name: "help"
};