module.exports = async (client, member, message) => {

        const channel = client.channels.cache.get(`889378674506342462`)
        channel.send(`Привет ${member}!`)
};