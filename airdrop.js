require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('airdrop')
        .setDescription('Airdrop NFTs to a list of addresses'),
    async execute(interaction) {
        await interaction.reply("heLLO");
    },
}