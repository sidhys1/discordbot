const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'unmute',
    aliases: ['unmute'],
    description: 'Unmutes [x] user',
	execute(message, args) {
        const msg = message;

        if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed(message));
        var uperson = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
        if(!uperson) return msg.reply(invalidargs(message));
        

        var umainrole = msg.guild.roles.cache.find(role => role.name === "Verified");
        var umuterole = msg.guild.roles.cache.find(role => role.name === "Muted");
        var umreason = args.slice(2).join(' ')

        if(!umuterole) return msg.reply("**Could not find the Muted role.**");

        uperson.roles.add(umainrole.id);
        uperson.roles.remove(umuterole.id);


        const umuteembed = new Discord.MessageEmbed()
        .setTitle("Unmute")
        .setColor('BLUE')
        .setDescription(`You were unmuted in ${msg.guild.name} with reason ${umreason}. `)
        .addField("Token", firetokengenerator)
        .setTimestamp();
        uperson.send(umuteembed)

        
        const umuteembed2 = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully un-muted ${uperson}, ${msg.author}.`)
        .setTimestamp();
        msg.channel.send(umuteembed2)

	},
};
