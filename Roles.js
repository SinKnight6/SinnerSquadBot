const Discord = require("discord.js");
const token = process.env.token;
const colors = require("./colors.json");
const PREFIX = '$';
const bot = new Discord.Client;

bot.on("ready", () => {
    // 745910575820832838
var testChannel = bot.channels.cache.find( channel => channel.id === '745910575820832838')
console.log(`Roless on!`);

setInterval(() => {
    const embed = new Discord.MessageEmbed();
        embed.setTitle("What games do you play??");
        embed.setColor(colors.blue);
        embed.setDescription(
        "<:cod:746208061550624860> - COD\n" +
        "<:valoran:746203917272219891> - VALORAN\n" + 
        "<:apex:746207267728392232> - APEX\n" +
        "<:overwatch:746205939278938173> - OVERWATCH\n" + 
        "<:fortnite:746205379511189554> - FORTNITE\n" + 
        "<:rainbow6:746211445154250846> - RAINBOW SIX\n" + 
        "<:csgo:746206777007407205> - CS:GO\n" + 
        "<:pubg:746207022084653167> - PUBG\n" + 
        "<:gtav:746210858937352263> - GTAV\n" + 
        "<:warframe:746208599021191190> - WARFRAME\n");
        testChannel.send(embed)
        .then(sentMessage => sentMessage.delete({ timeout: 25200000 })
        .catch(error => {

        }))
}, 25200000);

});

bot.on('message', message => {
    if(message.author.bot) 
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === 'NOTE: When you select any of these you will have access to the community chat of the game');
            if(embedMsg)
            {
                message.react('746208061550624860')
                .then(reaction => reaction.message.react('746203917272219891'))
                .then(reaction => reaction.message.react('746207267728392232'))
                .then(reaction => reaction.message.react('746205939278938173'))
                .then(reaction => reaction.message.react('746205379511189554'))
                .then(reaction => reaction.message.react('746211445154250846'))
                .then(reaction => reaction.message.react('746206777007407205'))
                .then(reaction => reaction.message.react('746207022084653167'))
                .then(reaction => reaction.message.react('746210858937352263'))
                .then(reaction => reaction.message.react('746208599021191190'))
                .catch(err => console.error);
            }
        }
        return;
    }

    if(message.content.toLowerCase() === '?roles')
    {
        message.delete()
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
        const embed = new Discord.MessageEmbed();
        embed.setAuthor('Select the games that you play (you can choose multiple)')
        embed.setTitle(`NOTE: When you select any of these you will have access to the community chat of the game`);
        embed.setColor(colors.blue);
        embed.setDescription(
        "<:cod:746208061550624860> - COD\n" +
        "<:valoran:746203917272219891> - VALORAN\n" + 
        "<:apex:746207267728392232> - APEX\n" +
        "<:overwatch:746205939278938173> - OVERWATCH\n" + 
        "<:fortnite:746205379511189554> - FORTNITE\n" + 
        "<:rainbow6:746211445154250846> - RAINBOW SIX\n" + 
        "<:csgo:746206777007407205> - CSGO\n" + 
        "<:pubg:746207022084653167> - PUBG\n" +
        "<:gtav:746210858937352263> - GTA V\n" +
        "<:warframe:746208599021191190> - WARFRAME\n");
        message.channel.send(embed)
        .then(sentMessage => sentMessage.delete({ timeout: 25200000 })
        .catch(error => {

        }))
        
    } else {
        message.reply("You don't have permission to use this command.");
    }
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(user.bot)
    return;

    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());
    var member = reaction.message.guild.members.cache.find(member => member.id === user.id);

    if(member.roles.cache.has(role.id))
    {
        member.roles.remove(role.id).then(member => {
            console.log("Removed" + member.user.username + "from the" + role.name + "name.");
        }).catch(err => console.error);
    } 
    else {
        member.roles.add(role.id).then(member => {
            console.log('Added' + member.user.username + 'to the' + role.name + ' role.');
        }).catch(err => console.error);
    }
});

bot.login(token);