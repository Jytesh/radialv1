module.exports = async (bot) =>{
    const guild = bot.guilds.cache.get('793195039731482644');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('793748960635256832');
        channel.setName(`Total members: ${memberCount.toLocaleString()}`);
        console.log('updating member count');
    }, 5000);
}