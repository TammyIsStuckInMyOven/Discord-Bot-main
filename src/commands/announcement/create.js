const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');
    const servername = interaction.options.getString('servername');
    const profilelink = interaction.options.getString('profilelink');
    const enemiesnallies = interaction.options.getString('enemiesnallies');
    

    client.embed({ 
        content: `<@&1078145894848921661> <@&1079126966273331220> Gank <:2337twoblackhearts:1082086935390081125>`,
        title: `📢 Gank!`, 
        desc: `Server Name: ${servername}\n\n Message:${message}\n\n Profile Name:${profilelink}\n\n Enemies & allies:${enemiesnallies}`
    }, channel);

    client.succNormal({
        text: `Announcement has been sent successfully!`,
        fields: [   
            {
                name: `📘┆Channel`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 