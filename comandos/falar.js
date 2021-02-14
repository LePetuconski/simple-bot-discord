const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    var fala = args.slice(1).join(" ");
    if (!fala) return message.reply(`preciso que mencione um canal e me diga o que falar.`)

    var canal = message.mentions.channels.first() || message.guild.channels.get(args[0])
    if (!canal) return message.reply(`preciso que mencione um canal`)

    canal.send(fala);
}

exports.help = {
    name: 'falar'
}