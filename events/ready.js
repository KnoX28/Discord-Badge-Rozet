const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { Knox } = require("../config.json");

module.exports = async (client) => {
  const rest = new REST({ version: "10" }).setToken(Knox);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }
    console.log(`[Knox - BOT] ${client.user.tag} Aktif!`);
};
