require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('airdrop')
        .setDescription('Airdrop NFTs to a list of addresses'),
    async execute(interaction) {
        await interaction.reply("heLLO");
    },
}