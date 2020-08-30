const discord = require('discord.js');
const token = process.env.token;
const bot = new discord.Client();

bot.on('ready', () => {
    let myGuild = bot.guilds.cache.get('745066864941465680');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('746436458197549126');
    memberCountChannel.setName('Members: ' + memberCount)
    .catch(error => console.log(error));
});

bot.on('guildMemberAdd', member => {
    let myGuild = bot.guilds.cache.get('745066864941465680');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('746436458197549126');
    memberCountChannel.setName('Members: ' + memberCount)
    .catch(error => console.log(error));

});

bot.on('guildMemberRemove', member => {
    let myGuild = bot.guilds.cache.get('745066864941465680');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.cache.get('746436458197549126');
    memberCountChannel.setName('Members: ' + memberCount)
    .catch(error => console.log(error));
    
});

bot.login(token);