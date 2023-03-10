client.commands.set(command.data.name, command);

console.log(
    `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
);


const { Client, Events, GatewayIntentBits } = require('discord.js');
const conf = require('../conf.json');
const TOKEN = conf.token;

// Créer un nouveau client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};

const fs = require('node:fs');
const path = require('node:path');


const commandsPath = path.join(__dirname, 'events');
const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}



// Le token permet à votre client de se connecter à Discord
client.login(TOKEN);

