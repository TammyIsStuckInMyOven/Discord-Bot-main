const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `📺┆Activities`,
            value: `\`/activities\``,
            inline: true
        },
        {
            name: `🚫┆AFK`,
            value: `\`/afk help\``,
            inline: true
        },
        {
            name: `📣┆Announcement`,
            value: `\`/announcement help\``,
            inline: true
        },
        {
            name: `👮‍♂️┆Auto mod`,
            value: `\`/automod help\``,
            inline: true
        },
        {
            name: `⚙️┆Auto setup`,
            value: `\`/autosetup help\``,
            inline: true
        },
        {
            name: `🎂┆Birthday`,
            value: `\`/birthdays help\``,
            inline: true
        },
        {
            name: `🤖┆Bot`,
            value: `\`/bot help\``,
            inline: true
        },
        {
            name: `🎰┆Casino`,
            value: `\`/casino help\``,
            inline: true
        },
        {
            name: `💰┆Economy`,
            value: `\`/economy help\``,
            inline: true
        },
        {
            name: `👪┆Family`,
            value: `\`/family help\``,
            inline: true
        },
        {
            name: `😂┆Fun`,
            value: `\`/fun help\``,
            inline: true
        },
        {
            name: `🎮┆Games`,
            value: `\`/games help\``,
            inline: true
        },
        {
            name: `🥳┆Giveaway`,
            value: `\`/giveaway help\``,
            inline: true
        },
        {
            name: `⚙️┆Guild settings`,
            value: `\`/guild help\``,
            inline: true
        },
        {
            name: `🖼┆Images`,
            value: `\`/images help\``,
            inline: true
        },
        {
            name: `📨┆Invites`,
            value: `\`/invites help\``,
            inline: true
        },
        {
            name: `🆙┆Leveling`,
            value: `\`/levels help\``,
            inline: true
        },
        {
            name: `💬┆Messages`,
            value: `\`/messages help\``,
            inline: true
        },
        {
            name: `👔┆Moderation`,
            value: `\`/moderation help\``,
            inline: true
        },
        {
            name: `🎶┆Music`,
            value: `\`/music help\``,
            inline: true
        },
        {
            name: `📓┆Notepad`,
            value: `\`/notepad help\``,
            inline: true
        },
        {
            name: `🎫┆Tickets`,
            value: `\`/tickets help\``,
            inline: true
        },

    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setStyle(Discord.ButtonStyle.Secondary),
                    );

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "💻",
                                    value: "commands-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `❓・Help panel`,
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Website](https:discord.gg/xvile) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `❓・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Website](discord.gg/xvilel) | [Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/798144456528363550/vote)`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 