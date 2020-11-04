const coms = require("../initializers/commands");
const { prefix } = require("../config.json");

const commands = coms.init();

module.exports = {
  event: "message",
  execute: (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
      commands.get(command).execute(message, args);
    } catch (e) {}
  },
};
