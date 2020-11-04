module.exports = {
  name: "info",
  description: "This command show info about bot",
  execute: (message) => {
    message.channel.send(
      `Hi, ${message.author.username}. I'm a users management bot! And you are a caremondá.`
    );
  },
};
