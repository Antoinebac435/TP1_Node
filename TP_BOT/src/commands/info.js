const { SlashCommandBuilder, Integration , EmbedBuilder  } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Répète le même message ! ')
        
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Informations sur l\'utilisateur')
                .addUserOption(option => option.setName('target').setDescription('Le nom d\'utilisateur')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Informations sur le serveur')),

    async execute(interaction) {

        if (interaction.options.getSubcommand() === 'user') {
            let user = interaction.options.getUser('target');
            if (user) {
                await interaction.reply('**Nom d\'utilisateur :** '+ user.username+'\n**Sa date d\'arrivée :** '+ user.joinedAt);
            } else {
                await interaction.reply('**Nom d\'utilisateur :** '+interaction.user.username+'\n**Sa date d\'arrivée :** '+ interaction.member.joinedAt);
            }
        }
        else{
            await interaction.reply('**Nom du serveur : ** '+ interaction.guild.name + `\n** Nombre d'utilisateur : ** ${interaction.guild.members.cache.filter(member => !member.user.bot).size}`);
        }

    }
}