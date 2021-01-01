//variables
require('dotenv').config();
const Discord = require('discord.js');
const PREFIX = '!';
const bot = new Discord.Client();
var version = '1.0.3';
var x = 'use !invite to add our bot to your server!';
var tag = '#3961';
const usedCommandRecently = new Set();
const memeberCounter = require('./membercounter');
//end of variables

//boot
bot.on('ready', () =>{
    console.log('This bot is on GGs');
    bot.user.setActivity('with ej in the bed!');
    memeberCounter(bot)
})
//end of boot




//self reply commands
bot.on('message', message =>{
    switch(message.content.toLowerCase()) {
        case 'hello':
            message.reply('hello there i am radial bot!');
        break;
        case 'kek':
            message.channel.send('kekw');
        break;
    }
});
//end of self reply commands



bot.on("guildMemberAdd", guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('793741337152847915').send(`welcome <@${guildMember.user.id}> to our server!`);
});


//Moderation commands , ban and kick


bot.on('message', message =>{
    if (message.author.bot) return console.log(`user has been kicked`);
    else if (!message.guild) return console.log('Member is not from the server');

    const args = message.content.split(' ');
    const cmd = args.shift();

    switch (cmd) {
        case `${PREFIX}kick`:
            const userID = args.shift().match(/<?@?!?(\d{17,19})>?/);
        if (!userID) return console.log('no id provided'); /*message.reply(new Discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription(`No ID/mentions provided!`));*/
            message.guild.members.resolve(userID[1]).kick(args.join(' ')).then(member => {
            message.reply(new Discord.MessageEmbed() 
                .setColor('BLUE')
                .setDescription(`${member.user.tag} has been kicked.`)
                .setTimestamp());
            });
        break;
    }
});





bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'cooldown':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('you cannont use that command just yet! wait another 30 seconds!');
            } else{
                message.reply('you are not on cooldown! this is a custom command!');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                    }, 30000);
            }
        break;
        case 'ping':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('you cannont use that command just yet! wait another 30 seconds!');
            } else{
                message.reply('pong!');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                    }, 30000);
            }
            break;
        case 'website':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('you cannont use that command just yet! wait another 30 seconds!');
            } else{
                message.reply('youtube.com/ejbean2op4u');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                    }, 30000);
            }
            break;
            case 'info':
                if(args[1] === 'version'){
                    message.channel.send('version' + " " +  version);
                }else{
                    message.channel.send('invalid args')
    
                }
                if(args[1] === 'developer'){
                    message.channel.send('EJ BEAN#3961');
                }else{
                    message.channel.send('invalid args')
                }
            break;


        case 'clear':
            if(!args[1]) return message.reply('error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;


        case 'seks':
            message.reply('owo uwu nom nom kiss :3, https://www.youtube.com/watch?v=4cbYOxykqX8&feature=youtu.be , come watch uwu cow :3')
        break;


        case 'hail':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('you cannont use that command just yet! wait another 30 seconds!');
            } else{
                message.reply('all hail zeude');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                    }, 30000);
            }
        break;


        case 'maha':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('you cannont use that command just yet! wait another 30 seconds!');
            } else{
                message.reply('more like maha simp');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                    }, 30000);
            }
        break;


        case 'shrey':
            message.channel.send('shrey is a boomer! pogU')
        break;  


            }
        });

       
        bot.on('message', message=>{
            let args = message.content.substring(PREFIX.length).split(" ");
        
            switch(args[0]){
                case 'invite':
                    message.channel.send('https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=117760')
            }
        
        })  

        
        bot.on('message', message => {

            let args = message.content.substring(PREFIX.length).split(" ");
        
            switch (args[0]) {
                case 'react':
                    message.channel.send('this is going to react to your message').then(message.react(':sunglassses:'));
                break;
            }
});



//end of commands

//Embeds

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'help':
            const embed = new Discord.MessageEmbed()
            .setTitle('Radial bot')
            .setColor('#00FF00')
            .addField('help', x)
            .addField('current server', message.guild.name)
            .addField('Player name', message.author.username)
            .setThumbnail()
            .setFooter('welcome to our server')
            .setImage(message.author.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            message.channel.send(embed);
        break;
    }
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('User information')
            .setColor('#ff0000')
            .addField('version', version, true)
            .addField('current server', message.guild.name, true)
            .addField('Player name', message.author.username, true)
            .setThumbnail()
            .setFooter('welcome to our server')
            message.channel.send(embed);
        break;
 

    }
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'update':
            const embed = new Discord.MessageEmbed()
    
            .setColor('#0099ff')
            .setTitle('invite')
            .setURL('https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=117760')
            .setAuthor('Radial Bot updates', 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png', 'https://discord.com/oauth2/authorize?client_id=770365212704243784&scope=bot&permissions=117760')
    
            .addFields(

                { name: '- Version 1.0.3 alpha test' , value: '\u200b', },
    
                { name: '- added new commands' , value: 'added ban and kick commands', },
    
                { name: '- improved bot response', value: 'added welcome message', },
    
                { name: '- added auto mod facility', value: 'added auto role on joining' },
    
                )
    
                .setTimestamp()
                .setFooter('Developed by : EJ BEAN#3961', 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png');
                message.channel.send(embed);

            break;
    }
});
      

//end of embeds

bot.login(process.env.TOKEN);