const Discord = require("discord.js");

const guildID = "702614886244417626"; //server ID
const channelID = "722566644064583701";

require("dotenv").config();

const client = new Discord.Client();

client.once("ready", () => {
  console.log("bot ready");
});

client.on("message", async msg => {
  console.log(msg);
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    if (msg.content.toLowerCase() === "ramen is love") {
      // await msg.reply("ramen is life!");
      await msg.channel.send("ramen is life!");
    }
  }
});

client.login(process.env.BOT_TOKEN);
