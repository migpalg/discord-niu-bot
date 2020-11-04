const path = require("path");
const fs = require("fs");

const handlers = fs.readdirSync(path.resolve(__dirname, "../handlers"));

module.exports.init = (client) => {
  for (const file of handlers) {
    const { event, execute } = require(`../handlers/${file}`);

    client.on(event, execute);
  }
};
