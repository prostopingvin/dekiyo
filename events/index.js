module.exports = (client) => {
    client
        .on('ready', () => require('./ready')(client))
        .on('guildMemberAdd', (member) => require('./guildMemberAdd')(client, member))
        .on('messageCreate', (message) => require('./messageCreate')(client, message))
        .on('interactionCreate', (interaction) => require('./interactionCreate')(client, interaction))
        .on('voiceStateUpdate', (oldV, newV) => require('./voiceStateUpdate')(client, oldV, newV));
};