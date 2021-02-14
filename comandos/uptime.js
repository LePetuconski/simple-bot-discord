const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    let dias = 0;
    let semanas = 0;

    let uptime = ``;
    let totalSegundos = (bot.uptime / 1000);
    let horas = Math.floor(totalSegundos / 3600);
    totalSegundos %= 3600;
    let minutos = Math.floor(totalSegundos / 60);
    let segundos = Math.floor(totalSegundos % 60);

    if (horas > 23) {
        dias = dias + 1;
        horas = 0;
    }

    if (dias == 7) {
        dias = 0;
        semanas = semanas + 1;
    }

    if (semanas > 0) {
        uptime += `${semanas} semanas,`;
    }

    if (minutos > 60) {
        minutos = 0;
    }

    uptime += `**${dias}d** **${horas}h** **${minutos}m** **${segundos}s**`;
    message.channel.send(`:sleeping: Estou acordada faz: ${uptime}`);

}

exports.help = {
    name: 'uptime'
}