const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    const ajuda = new Discord.MessageEmbed()


    .setColor("#f7bcff")
        .setTitle("Lista de comandos!")
        .setDescription(`**💠 !ajuda - Mostra este comando**\n**🕒 !uptime - Mostra o tempo que o bot está online**\n**🌐 !ping - Mostra o meu ping!**\n**😘 !kiss - Comando de beijo**\n**🎮 !roleta - Jogar Roleta Russa**\n**🤷 !falar - Mencione um canal e eu vou dizer o que você pediu!!**\n`)
        .setTimestamp()



    message.channel.send(ajuda)
}


exports.help = {
    name: 'ajuda'
};