const { SlashCommandBuilder, Integration , EmbedBuilder  } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Info à propos du serveur'),
    async execute(interaction) {
        
        const { guild } = interaction
        const { members } = guild
        const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({name: `name : ${guild.name}`})
            .setTitle('Informations sur le serveur')
            .addFields(
                {name : "Nom du serveur : ",value:`Nom : ${guild.name}`,inline:true},
                {name : "Nombre d'users" ,value: `Membres : ${members.cache.filter(member => !member.user.bot).size}`,inline:true}
            )
        await interaction.reply({embeds:[Embed]})

        
    },
}
