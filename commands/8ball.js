const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: '8ball',
    aliases: ['8ball'],
    description: 'Returns a random 8ball response, just like a 8ball',
	execute(message, args) {
        var res = [
            "Yes",
            "No",
            "Maybe",
            "Probably",
            "Probably not"
        ]       

            let embed = new MessageEmbed()
            .addField("Answer", (res[Math.floor(Math.random() * res.length)]))
            .setColor('42c2f4')
            .setTimestamp();
            message.channel.send(embed);
	},
};

