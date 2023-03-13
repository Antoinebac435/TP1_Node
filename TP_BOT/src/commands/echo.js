const { SlashCommandBuilder, Integration } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Répète le même message ! ')
        .addStringOption(option =>
            option.setName('phrase')
            .setDescription("La phrase à répeter :")
            .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('phrase'))
    },
}
