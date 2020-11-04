const Discord = require("discord.js");
const commands = require("./initializers/commands");
const handlers = require("./initializers/handlers");

const client = new Discord.Client();

// Set client commands
client.commands = commands.init();

// Respond to events
handlers.init(client);

module.exports = client;
