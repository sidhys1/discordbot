const Discord = require('discord.js')
const MessageEmbed = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'fixname',
    aliases: ['fixname', 'namefix'],
    description: `Updates a users name if they have a unpingable / rude name `,
	async execute(msg, args) {

        if (!msg.member.permissions.has('MANAGE_MESAGES')) return msg.channel.send(Youdonthavepermsembed(msg));

        let fixnameuserping = msg.mentions.members.first() 
        
        let fixnameusernoping = msg.guild.members.cache.get(args[0]) 

        
        if(!fixnameusernoping) {
            if(!fixnameuserping) 
            return msg.reply(invalidargs(msg));
        }


        if(fixnameusernoping) {

        var fixnamenoping2 = msg.guild.members.cache.get(args[0]) 

        var fixnamenoping3 = fixnamenoping2.id

       var fixnamecomplete2 = fixnamenoping3.slice(3, 7)

        let fixnick2 = 'No Name ' + fixnamecomplete2        

	try {
        fixnameusernoping.setNickname(fixnick2);
	} catch(err) {
	message.channel.send('failed to change nickname :(')
	}

        const fixnickembed2 = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully changed ${fixnameusernoping}'s nickname to \`${fixnick2}\`, ${msg.author}.`)
        .setTimestamp();
        msg.channel.send(fixnickembed2)


        } else {
	 var fixnamestart = fixnameuserping.id 
	 
        var fixnamecomplete = fixnamestart.slice(3, 7);

        let fixnick = 'No Name ' + fixnamecomplete         


	try {
        fixnameuserping.setNickname(fixnick);
	} catch(err) {
	message.channel.send('failed to change nickname :(')
	}

        const fixnickembed = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully changed ${fixnameuserping}'s nickname to \`${fixnick}\`, ${msg.author}.`)
        .setTimestamp();

        msg.channel.send(fixnickembed)

	}
	},
};

