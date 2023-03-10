const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Répète le message que vous avez envoyé.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Le message à répéter.')
                .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString('input')
        await interaction.reply(input)
    },
}