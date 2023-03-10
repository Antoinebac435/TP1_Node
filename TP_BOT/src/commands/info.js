const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Renvoie des informations sur l\'utilisateur mentionné ou le serveur.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Renvoie des informations sur l\'utilisateur mentionné.')
                .addUserOption((option) =>
                    option
                        .setName('cible')
                        .setDescription('L\'utilisateur dont vous voulez les informations.')
                        .setRequired(false),
                ))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Renvoie le nom du serveur et le nombre de membres.')),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'user') {
            const user = interaction.options.getUser('cible') || interaction.member.user;
            const date = new Date(user.createdAt);
            await interaction.reply(`Nom d'utilisateur: ${user.username}\nA rejoint le serveur le: ${date}`);
        } else if (subcommand === 'server') {
            await interaction.reply(
                `Nom du serveur: ${interaction.guild.name}\nNombre de membres: ${interaction.guild.memberCount}`);
        }
    }
}