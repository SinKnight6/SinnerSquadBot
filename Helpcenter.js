const Discord = require ('discord.js');

const bot = new Discord.Client();

const token = process.env.token;

// Break

bot.on('ready', () => {
  console.log('Helpcenter on!')
})

// Break

const prefix = "!";
bot.on('message', async message => {

    if (message.author.bot) return;


// Break

    if (message.content.toLowerCase() === '?help message' && message.channel.id === '745849795868098622'){
      message.delete()
      if(message.member.hasPermission('ADMINISTRATOR')) {
      let embed = new Discord.MessageEmbed()
      .setColor(000000)
      .setDescription(` Use this command in order to get started:
      \`!Live chat\`
      `)
      message.channel.send({embed: embed});
     } else {
       message.reply("You don't have permission to use this command lol.").then(sentMessage => sentMessage.delete({ timeout: 6000
       }))
     };
     };
    
// Break
if (message.channel.id === '746951883574476902')
    await message.delete();
if (message.content.toLowerCase() === '?music commands' && message.channel.id === '746951883574476902'){
  message.delete()
  if(message.member.hasPermission('ADMINISTRATOR')) {
  let embed = new Discord.MessageEmbed()
  .setColor(000000)
  .setDescription(`
-play[link or search query]
Loads your input and adds it to the queue. If there is no playing track, then it will start playing.

-join
Makes the bot join your voice channel.

-queue
Displays the queue.

-next
Skips to the next song.

-back
Skips to the previous song.

-clear
Removes all tracks from the queue.

-lyrics
Displays lyrics for the playing track.

-pause
Pauses playback.

-resume
Resumes playback.

-disconnect
Disconnects the bot from your voice channel and clears the queue.
  
  
  `)
  message.channel.send({embed: embed});
 } else {
   message.reply("You don't have permission to use this command lol.").then(sentMessage => sentMessage.delete({ timeout: 6000
   }))
 };
 };

// Brealk 
    if (message.channel.id === '745849795868098622')
    await message.delete();
    if (message.content.toLowerCase() === prefix + "live chat" && message.channel.id === '745849795868098622') {
      let uEmbed = new Discord.MessageEmbed()
      .setColor(0x00FF44)
      .setDescription(`Hello ${message.author} Please type, \`!Help\` to get started. This will await and will be cancelled in 2 minutes if you dont use a command.`)
      message.channel.send({embed: uEmbed})
      .then(() => {
       message.channel.awaitMessages(response => response.content === '!help' || message.channel.awaitMessages(response => response.content === '!Help'),{
         max: 1,
         time: 120000,
         errors: ['time'],
       })
       .then((collected) => {
        let uEmbed = new Discord.MessageEmbed()
        .setColor(0x001AFF)
         .setDescription(`${message.author}, i just sent you a message Please check your PM (private messages) for: ${collected.first().content}`);
         message.channel.send({embed: uEmbed})
         })
         .catch(() => {
          let uEmbed = new Discord.MessageEmbed()         
          .setColor(0xFF0000)
          .setDescription(`**${message.author}**, Your help request was cancelled`)
          .addField('**Error**','**You did not say any commands within the time limit!, to summon me again please use,  ``!live chat`` command.**');
           message.channel.send({embed: uEmbed});
         });
     });
     
     }

})

bot.login (token);