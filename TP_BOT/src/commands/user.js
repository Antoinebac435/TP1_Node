const { SlashCommandBuilder, Integration , EmbedBuilder  } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Info à propos du serveur'),
    async execute(interaction) {
        const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Information sur l utilisateur')
            .addFields(
                {name : "Nom du serveur : ",value:`${interaction.user.tag}`,inline:true},
                {name : "Date d'arrivée sur le serveur " ,value: ` ${interaction.member.joinedAt}`,inline:true}
            )
        await interaction.reply({embeds:[Embed]})

    },
}
