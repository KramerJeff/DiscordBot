var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!");
    }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("MjYwOTM5MDE4MjQwMjYyMTU2.Cztp8A.zHRQjiOGWqT6KznCt_P4BWKzMBo");