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

// Break


    
    
    
});

bot.login(token);