const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
  'https://i.pinimg.com/originals/b7/1a/17/b71a17cc7dbd6b4814ff1f81657a45e6.gif',
  'https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
'https://pa1.narvii.com/6560/6c22de43a76dcb6c0df4b1882037c5b4d14c460c_hq.gif',
'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif',
'https://64.media.tumblr.com/cb7facdb5b36f5c7d1d3cc470e27d7fa/tumblr_mgofdkZxSY1s3n73ro1_500.gif',
'https://www.intoxianime.com/wp-content/uploads/2017/02/KuzunoHonkai-Episode5-Omake-3.gif',
'https://i.imgur.com/O49C3HS.gif',
'https://64.media.tumblr.com/a86ac3d87c03c844898eedf841fc04f5/tumblr_pe123uhFl21ut7rfeo1_400.gifv',
'https://ptanime.com/wp-content/uploads/2017/07/Koi-to-uso-GIF3.gif',
'https://i.pinimg.com/originals/11/8a/c9/118ac94d9f00f9b668223113a5944af4.gif',



];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar 😘 ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}

exports.help = {
    name: 'kiss'
};