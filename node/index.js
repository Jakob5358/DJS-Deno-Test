import { Client } from 'discord.js';

const client = new Client({ intents: [] });

client.once('ready', (bot) => console.log(`Up and running on ${bot.user?.tag}`));

const TOKEN = ''; // Put your discord token here

client.login(TOKEN);
