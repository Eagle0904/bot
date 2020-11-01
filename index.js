const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    console.log("Je suis prêt !");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!regle') {
            message.channel.send({embed: {
                color: 9755000,
                author: {
                    name: '⚠️Voici ci joint le règlement du serveur, merci de le lire attentivement, il seras indispensable tout au long de votre aventure !',
                    icon_url: 'https://cdn.discordapp.com/attachments/770998917991104532/771083228559310879/logo512noir.png'
                },
                title: '__**Lien du réglement !**__',
                description: "***Merci de respecter ce réglement !***",
                url: 'https://forms.gle/3HLUTuGNu3xDuye7A',
                fields: [{
                    name: '__A ne pas oublier:__',
                    value: '*Vous devez mettre vos Nom + Prénom RP sur steam et sur le Discord*'
                }],
                timestamp: new Date(),
                footer: {
                    text: 'Le staff de Sublime',
                    icon_url: 'https://cdn.discordapp.com/attachments/770998917991104532/771083228559310879/logo512noir.png',
                }
            }})
        }
    }
});

bot.login('NzcwOTkzOTYwNDA3MjY5Mzk4.X5lqFA.CE1dnGzP1KpJJ9vQZyp_4iPhHLI')