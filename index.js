const Discord = require('discord.js')
const fs = require('fs') 
const config = require('./config.json')
const fetch = require('node-fetch')
const mongoose = require('mongoose');
const client = new Discord.Client(config.cfg)

client.login(config.token);

client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) return console.log('Команды не найдены!!')

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        client.commands.set(props.help.name, props)
    })
})

require("./events")(client);

const DiscordDB = require('simple-discord.db');
client.Memory = new DiscordDB("Memory", client);
