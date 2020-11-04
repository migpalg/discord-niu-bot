module.exports = {
  name: "love",
  description: "Say a love thing :)",
  execute: (message) => {
    const loveMessages = [
      "un(a) guapo(a)",
      "un(a) crack que no consume crack ;)",
      "una maquinota",
      "maestro(a) lomo plateado",
      "lindo(a) ;)",
    ];
    const randomIndex = Math.floor(Math.random() * (loveMessages.length - 1));
    const randomMessage = loveMessages[randomIndex];
    message.channel.send(
      `:) ${message.author.username}, eres ${randomMessage}. `
    );
  },
};
