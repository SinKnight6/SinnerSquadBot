const Discord = require("discord.js");
const colors = require("./colors.json");
const bot = new Discord.Client();
const talkedRecently = new Set();
const { MessageEmbed } = require('discord.js')
const DESTINATION = '745824457305882745';
const openTickets = new Map();
const ACCEPT = '745823644080406628';
const REJECT = '745823607896277104';


const swearWords = ["Nigga", "nigga", "shit", "Shit", "Fuck", "fuck", "Stupid", "stupid", "Dick", "dick", "Dipship", "dipshit", "Asshole", "asshole", "STFU", "Stfu", "stfu", "Bitch", "bitch", "hoe", "Hoe", "HOE", "Dumb", "DUMB", "Dumass", "DUMASS", "Dumfuck", "DUMFUCK"];

const token = process.env.token;

const PREFIX = '!';

// Bot Activity start

bot.on('ready', () => {
    console.log('LiveChat on!')
})

// Bot Activity end.

// What keeps the messages running satrt

bot.on("message", async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.bot) return;

// What keeps the messages running end.

// command cooldown

if (talkedRecently.has(message.author.id))
  return;
  
// end of command cool down

// Swear word start

if( swearWords.some(word => message.content.includes(word)) ) {
    if(message.channel.type === 'dm'){
    message.react('😡');
    message.author.send("``Please respect bot and watch your language``")
    .then(sentMessage => sentMessage.delete({ timeout: 50000
    }))
    .catch(error => {
  
  });
    // Or just do message.delete();
  }
  } ;

// Swear word end.

// Live chat start



// Live chat end.

//   Helper Start
if (message.content.toLowerCase() === '!help' && message.channel.id === '745849795868098622'){
    message.author.send('Bot is typing .....')
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
    .setColor(colors.blue)
    .setTitle("Hello there Human you have requested for help, how can i help you today?")
    .setThumbnail('https://cdn.discordapp.com/attachments/745852739682041929/749059388341223434/sinnersquad_logo.jpg')
    .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
    .setDescription(`

    2. If you have purchased something from Knight-Shop or Shoppy please type, _\`Purchase\`_ .

    3. If you had an issue with your puchase or need help purchasing please type, _\`Purchase issue\`_.

    4. If you need information, help or have an issue with Impulse mod please type, _\`Impulse\`_ .

    5. If you need information, help or have an issue with GTA V Game key please type, _\`GTA V\`_ .`)
    .setTimestamp()
    .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    message.author.send({embed: uEmbed1});
});
});
};

// Break

if (message.content.toLowerCase() === 'purchase') {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
      if (!openTickets.has(message.author.id)) {
        const embed = new MessageEmbed()
        .setDescription(`Hello! ${message.author} We have received your message, Please wait for <@594785101926105089> to reply back please be patient.`)
        .setColor('#3AFF00')
        .setTimestamp()
        message.channel.send(embed)
        .then(sentMessage => sentMessage.delete({ timeout: 86400000 })
        .catch(error => {
        }));
        openTickets.set(message.author.id, message.guild);
        const channel = bot.channels.cache.get(DESTINATION);
        if (channel) {
            const embed = new MessageEmbed()
            .setAuthor(message.author ,message.author.displayAvatarURL())
            .setDescription(`[${message.author}] Has bought something, please let <@594785101926105089> ANSWER IT**. `)
            .setColor('#0070FF')
            .setTimestamp();
            const msg = await channel.send(embed);
            await msg.react(ACCEPT);
            await msg.react(REJECT);  
            try {
                const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
                const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
                const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
                if (choice.emoji.id === ACCEPT) {
                  message.author.send('_Staff looking for your query, please stand by_ ......')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed3 = new MessageEmbed()
                    .setDescription(`Staff has accepted your query, Please type what product you have purchased (Be specific if you need to) and a Screenshot/file of the invoice.`)
                    .setColor('#3AFF00')
                    .setTimestamp()
                    message.author.send(embed3)
                    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                    .catch(error => {
                    }));
                    });
                    });
                    channel.send('_Accepting Users message_ .....')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                    const embed4 = new MessageEmbed()
                    .setDescription(`You have Accepted the message`)
                    .setColor('#3AFF00')
                    .setTimestamp()
                    channel.send(embed4)
                    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                    .catch(error => {
                    }));
                  });
                  });
                   await handleCollectors(channel, message); 
                   message.author.send('_Staff is Ending chat_ ......')
                    .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                   const embed = new MessageEmbed()
                    .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                    .setColor('#3AFF00')
                    .setTimestamp()
                    message.author.send(embed)
                    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                    .catch(error => {
                    }));
                    });
                    });                                                 
                    channel.send('_Ending chat_ ......')
                    .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                    const embed1 = new MessageEmbed()
                    .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                    .setColor('#3AFF00')
                    .setTimestamp()
                    channel.send(embed1)
                    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                    .catch(error => {
                    }));
                  });
                });
                   openTickets.delete(message.author.id);
                } else if (choice.emoji.id === REJECT) {
                  message.author.send('_Staff looking for your query, please stand by_ ......')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                    const embed = new MessageEmbed()
                    .setDescription(`Your message was rejected by Staff. You may try later`)
                    .setColor('#FF0000')
                    .setTimestamp()
                    message.author.send(embed)
                    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                    .catch(error => {
                    }));
                    });
                    });
                    channel.send('_Rejecting Users Message_ ......')
                    .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                    const embed1 = new MessageEmbed()
                    .setDescription(`You have rejected the message.`)
                    .setColor('#FF0000')
                    .setTimestamp()
                    channel.send(embed1)
                    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                    .catch(error => {
                    }));
                    });
                    });
                    setTimeout(() => {
                        openTickets.delete(message.author.id);
                    }, 30000);
                }
            } catch (err) {
                console.log(err);
                message.author.send('_Staff is taking longer than usual_ .......')
                    .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                const embed = new MessageEmbed()
                .setDescription(`No one was available to accept your query. Please try again`)
                .setColor('#FFB900')
                .setTimestamp()
                message.author.send(embed)
                .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                .catch(error => {
                }));
                });
                });
                channel.send('_Automatically Rejecting Users Message_ .......')
                    .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                const embed1 = new MessageEmbed()
                .setDescription(`the message was automatically rejected because no one reacted to the message`)
                .setColor('#FFB900')
                .setTimestamp()
                channel.send(embed1)
                .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                .catch(error => {
                }));
                });
                });
                openTickets.delete(message.author.id);
            }
        } else {
            message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
            openTickets.delete(message.author.id);
        }
    }
  }
  }
  
  function handleCollectors(channeL, message) {
  
    const filter = m => m.author.id === message.author.id;
    const dmCollector = message.channel.createMessageCollector(filter);
  
    const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
    const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);
  
    return new Promise((resoLve, reject) => {
        dmCollector.on('collect', m => {
            const files = getAttachmentLinks(m.attachments);
            const embed = new MessageEmbed()
              .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
              .setDescription(`\`Users Message:\` **${m.content}** `)
              .setColor('#0093FF')
              .setTimestamp()
              .setImage(`${files}`)
              .setFooter('talking with user', message.author.displayAvatarURL());
              channeL.send(embed);
          });
        guildChannelCollector.on('collect', m => {
            if (m.content.toLowerCase() === 'endchat') {
                guildChannelCollector.stop();
                dmCollector.stop();
                resoLve();
            } else {
                const files = getAttachmentLinks(m.attachments);
                const embed = new MessageEmbed()
                .setAuthor(`Staff member: ${m.author.tag}`)
                .setDescription(`\`Staff Message:\` **${m.content}** `)
                .setImage(`${files}`)
                .setTimestamp()
                .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
                message.author.send(embed)
                .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                .catch(error => {
                }));
            }
        })
    });
  }
  
  function getAttachmentLinks(attachments) {
    const valid = /^.*(gif|png|jpg|jpeg)$/g
    return attachments.array()
      .filter(attachment => valid.test(attachment.url))
      .map(attachment => attachment.url);
  }

// Break

});

bot.login(token);