const Discord = require("discord.js");
const axios = require("axios");

exports.run = async (client, message, args) => {
  const target = message.content.split(" ")[1];
  if (!args[0]) {
    return message.channel.send("You need to provide an andress.");
  }
  // good IP
  axios
    .get(`http://ip-api.com/json/${target}`)
    .then((response) => {
      const data = response.data;
      message.channel.send(
        "```" +
          `IP: ${data.query}\nCountry: ${data.country}, ${data.countryCode}\nRegion: ${data.regionName}, ${data.region}\nCity: ${data.city}\nISP: ${data.isp}\nOrganization: ${data.org}\nASN: ${data.as}` +
          "```"
      );
    })
    .catch((error) => {
      console.log(error);
      message.channel.send("Error occured");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["geoip"],
  permLevel: 0,
};

exports.help = {
  name: "geoip",
  description: "rcong",
  usage: "geoip",
};
