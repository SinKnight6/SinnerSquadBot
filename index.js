const Discord = require("discord.js");
helpcenter = require("./Helpcenter");
Menberscount = require("./MemberCount");
modarator = require("./Modarator");
livechat = require("./LiveChat");
Roless = require("./Roles");
purgecommand = require("./PurgeCommand")
const token = process.env.token;
const PREFIX = '$';
const bot = new Discord.Client;

bot.on('ready', () => console.log(`${bot.user.tag} Is logged in`));

bot.on('message', async message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === 'verification message' && message.channel.id === '745811686530744322'){
    if(message.member.hasPermission('ADMINISTRATOR')) {
    let embed = new Discord.MessageEmbed()
    .setColor(000000)
    .setDescription(` **__Welcome to Sinner-Squad!__**

    Hello! You are required to complete this Step before entering the server

    **Why?** 
    This is to protect the serveer against targeted attacks using automated user accounts.

    Just simply type:

    \`!verify\``)
    message.channel.send({embed: embed});
   } else {
     message.reply("You don't have permission to use this command lol.").then(sentMessage => sentMessage.delete({ timeout: 6000
     }))
   }
  };
  
  bot.on('guildMemberAdd', member => {
    console.log(member.user.tag);
  });

  if (message.channel.id === '745811686530744322')
    await message.delete();
  if (message.content.toLowerCase() === '!verify' && message.channel.id === '745811686530744322')
  {
    message.channel.send(`${message.author} Please stand by.
Attempting to verify you in **Sinner-Squad**`)
  .then(sentMessage => sentMessage.delete({ timeout: 10000})
 .catch(error => {
  // Hnadler
}))
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 100,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed6 = new Discord.MessageEmbed()
    .setTitle('**Verified**')
    .setColor(3066993)
    .setDescription(`${message.author} You are now Verified, Welcome to our server`)
    message.channel.send({embed: uEmbed6})
      .then(sentMessage => sentMessage.delete({ timeout: 6000})
 .catch(error => {
    }));
  });
});
    await message.delete().catch(err => console.log(err));
    const role = message.guild.roles.cache.get('746469874288689208');
    if(role) {
      try {
      setTimeout( async () => {
      await message.member.roles.add(role); }, 11000)
      console.log(`Role added!`);
    }
    catch(err) {
      console.log(err);
      }
    }
  }

  if (message.content.toLowerCase() === 'impulse troubleshoot'){
    message.delete()
    message.channel.send(`Looking for troubleshooting solutions <a:Loading:705280596217430019>
  ${message.author} Please stand by`)
      .then(sentMessage => sentMessage.delete({ timeout: 8000 })
     .catch(error => {
      // Hnadler
    }))
    .then(() => {
      message.channel.awaitMessages(response => response.content === '', {
        max: 1,
        time: 100,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.send(`The collected message was: ${collected.first().content}`);
        })
        .catch(() => {
          let uEmbed1 = new Discord.MessageEmbed()
          let pages = [`**__If you find yourself with an Infinite Loading Screen while trying to load into online, try the following steps__** :
  
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
  https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335\`
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
          reaction.users.remove(user);
          if (page === 1) return;
          page--;
          embed.setDescription(pages[page-1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed)
          r.remove(r.users.filter(u => u === message.author).first());
        })
  
        forwards.on('collect', r => {
          reaction.users.remove(user);
          if (page === pages.length) return;
          page++;
          embed.setDescription(pages[page-1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          r.remove(r.users.filter(u => u === message.author).first());
          msg.edit(embed)
        
      })});
    });
      });
    });
  }

// Break


    
    
    
});

bot.login(token);