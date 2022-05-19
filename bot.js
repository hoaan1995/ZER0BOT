const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const ayarlar = require('./ayarlar.json');
const moment = require('moment')
require('./util/eventLoader')(client);

var colors = require('colors');
var prefix = ayarlar.prefix;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
/*fs.readdir('./attacks/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} attacks loading.`);
  files.forEach(f => {
    let props = require(`./attacks/${f}`);
    log(`Attack: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});*/

// Layer 4
fs.readdir("./attack_layer4/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log(new Error("An error occu.red!"));
    process.exit(1);
    return;
  }

  jsfile.forEach((f) =>{
    let props = require(`./attack_layer4/${f}`);
    console.log(`Loaded ${f}.`);
    client.commands.set(props.help.name, props);
  });
})

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./attack_layer4/${command}`)];
      let cmd = require(`./attack_layer4/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./attack_layer4/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./attack_layer4/${command}`)];
      let cmd = require(`./attack_layer4/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//Layer 7
fs.readdir("./attack_layer7/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log(new Error("An error occu.red!"));
    process.exit(1);
    return;
  }

  jsfile.forEach((f) =>{
    let props = require(`./attack_layer7/${f}`);
    console.log(`Loaded ${f}.`);
    client.commands.set(props.help.name, props);
  });
})

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./attack_layer7/${command}`)];
      let cmd = require(`./attack_layer7/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./attack_layer7/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./attack_layer7/${command}`)];
      let cmd = require(`./attack_layer7/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('ready', message => {
	
  
console.log('███████╗████████╗ █████╗ ██████╗ ████████╗██╗███╗   ██╗ ██████╗ '.gray);
console.log('██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██║████╗  ██║██╔════╝ '.gray);
console.log('███████╗   ██║   ███████║██████╔╝   ██║   ██║██╔██╗ ██║██║  ███╗'.gray);
console.log('╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██║██║╚██╗██║██║   ██║'.gray);
console.log('███████║   ██║   ██║  ██║██║  ██║   ██║   ██║██║ ╚████║╚██████╔╝'.gray);
console.log('╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ '.gray);


	
})

client.once('ready', () => {
    console.log('');

    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'HENTAI',
            type: 'WATCHING',
            url: 'https://discord.com/'
        }
    });
});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.red(e.replace(regToken, 'that was.redacted')));
// });

client.on('warn', e => {
  console.log(chalk.b.red(e.replace(regToken, 'that was.redacted')));
});

client.on('error', e => {
  console.log(chalk.b.red(e.replace(regToken, 'that was.redacted')));
});

client.login("PASTE YOUR BOT TOKEN");
