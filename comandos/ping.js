const Discord = require("discord.js");

exports.run = (bot, message, args) => {

message.channel.send(`Meu ping está em: \` ${Math.round(bot.ws.ping)} ms\``)



}

exports.help = {
    name: 'ping'
}