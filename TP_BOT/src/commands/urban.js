const { SlashCommandBuilder, Integration, EmbedBuilder } = require('discord.js');
const { request } = require('undici')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('terme à rechercher')
        .addStringOption(option =>
            option.setName('terme')
            .setDescription("La phrase à répeter :")
            .setRequired(true)
        ),
    async execute(interaction) {
        let terme = interaction.options.getString('terme');
        const catResult = await request('https://api.urbandictionary.com/v0/define?term='+ terme)
        const { list } = await catResult.body.json()
        for (let i=0;i<list.length;i++){
            const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Définition : ')
            .addFields(
                {name : ".",value:`Nom : ${list[i].definition}`},
            )
            await interaction.channel.send({embeds:[Embed]})
        }
    },
}