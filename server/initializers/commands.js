const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");

const commands = fs.readdirSync(path.resolve(__dirname, "../commands"));

module.exports.init = () => {
  const collection = new Discord.Collection();

  for (const file of commands) {
    const command = require(`../commands/${file}`);
    collection.set(command.name, command);
  }

  return collection;
};
