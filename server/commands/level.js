module.exports = {
  name: "level",
  description: "This command show your current level on the channel",
  execute: (message) => {
    message.channel.send("Currently I don't have this option.");
  },
};
