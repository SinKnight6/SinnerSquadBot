const Discord = require("discord.js");

const token = process.env.token;

const PREFIX = '$';

const bot = new Discord.Client;

bot.on("ready", async () => {
console.log(`PurgeCommand on!`) 
})

bot.on("message", async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.bot) return;



    if (message.content.toLowerCase() === '?clear' || message.content.toLowerCase() === '?purge') {
        message.delete()
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
        message.channel.bulkDelete(100)
    } else {
        message.reply("You don't have permission to use this command.");
    }
}
})

bot.login(token);