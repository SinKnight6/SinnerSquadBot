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
            embed.setTitle('Select the games that you play (you can choose multiple)')
            embed.setColor(colors.blue);
            embed.setDescription(
            "NOTE: When you select any of these you will have access to the community chat of the game\n"+
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
        testChannel.send(embed)
        .then(sentMessage => sentMessage.delete({ timeout: 25100000 })
        .catch(error => {

        }))
}, 25200000);

});

bot.on('message', message => {
    if(message.author.bot) 
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === 'Select the games that you play (you can choose multiple)');
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
        embed.setTitle('Select the games that you play (you can choose multiple)')
        embed.setColor(colors.blue);
        embed.setDescription(
        "NOTE: When you select any of these you will have access to the community chat of the game\n"+
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
            reaction.users.remove(user);
            console.log("Removed" + member.user.username + "from the" + role.name + "name.");
        }).catch(err => console.error);
    } 
    else {
        member.roles.add(role.id).then(member => {
            reaction.users.remove(user);
            console.log('Added' + member.user.username + 'to the' + role.name + ' role.');
        }).catch(err => console.error);
    }
});

bot.on('message', async message => {

    if (message.author.bot) return;

if (message.content.toLowerCase() === 'standard features') {
    let pages = [`
    **__If you find yourself with an Infinite Loading Screen while trying to load into online, try the following steps__** :
  
    \`Step 1: Load into story mode and inject the menu.
    Step 2: Join a solo online session
    Step 3: Use the session starter to find a public lobby
    Step 4: Script host kick anyone in that lobby whilst in the clouds\``,
    `
    **__If you want to change session__**
    
    \`use Impulse's Session Starter!\``,
    `
    **__failed to find OEURI__** :
    
    \`Issue on steam version only that can be ignored(its RID related and can intefer with rid spoofing)\``,
    `
    **__If you can't receive CEO Invites__**
    
    \`disable your "Kick" Protection under Protection --> Script Events --> Kicks\``,
    `
    **__Gifting Vehicles__** :
    
    \`Target must have a full garage, spawn the car with "Gift Vehicle" enabled, then let the player swap one car of the full garage with the gifted car. Beware that those cars cannot be sold.\``,
    `
    **__Crash Troubleshooting__** :
    
    \`1. Check if you have the newest Impulse Version. If you aren't sure, redownload the files on www.impulse.one/
    
    2. Check your Graphics Card Driver as those are a common reason for crashing.
    
    3. Try deleting your Impulse Folder (Documents/Impulse). An alternative is just to rename your existing Impulse Folder.
    
    4. Make sure that you have a clean GTA Install, delete every file that isnt from GTA V.
    
    5. Close Overlays for example Discord, see if that changes anything.
    
    6. Make sure you have your Window Settings on "Borderless" or "Windowed"
    
    7. Make sure you inject in Singleplayer when using Xenos!\``,
    `
    **__For auth errors, saying something along the lines of 'failed to connect to auth server', please try the following solutions__** ;
    
    \`- Check you are downloading/using newest versions 1.0.5 (Essential) or 1.1.5 (Standard/VIP) You may need to clear the cache/history in 
     browser, to remove old version, as they can remain in your system memory.
    
    - If you use a VPN, try to change servers and login again.
    
    - Restart your router, PC, and/or release your current IP using CMD. (https://www.tp-link.com/us/support/faq/840/)\``,
    `
    **__Manual Troubleshooting__** :
    
    \`1. Make sure that you use the latest version of Impulse! Redownload files if necessary on https://impulse.one/download.php
    2. Try both ways of injecting (Auto-Injector & Xenos)
    3. If you have trouble gameplay-wise, try to disable some Script Protections that suit your problem!
    For example: I can't receive any Invites to other players' CEO --> Disable the "Invites" Protection under Protection --> Script Protection\``,
    `
    \`Steam verify integrity of game files tutorial 
    https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335\'
  `];
    let page = 1;
    const embed = new Discord.MessageEmbed()
      .setColor(colors.orange)
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page-1])
  
      message.channel.send(embed).then(msg => {
        msg.react('⬅️').then( r => {
          msg.react('➡️')
  
          const backwardsFilter = (reaction, user) => reaction.emoji.name === ('⬅️') && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === ('➡️') && user.id === message.author.id;
  
          const backwards = msg.createReactionCollector(backwardsFilter, { time: 5400000 });
          const forwards = msg.createReactionCollector(forwardsFilter, { time: 5400000 });
  
          backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
            r.users.remove(r.users.cache.filter(u => u === message.author).first())
          })
  
          forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
            r.users.remove(r.users.cache.filter(u => u === message.author).first());
          })
  
        })
      })
      
  };

});

bot.login(token);