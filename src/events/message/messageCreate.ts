import type { GuildMember, Message } from 'discord.js';
import { EventBuilder } from 'structures';
import { Commands } from 'util/commands';
import type { ExtendedClient } from '../../structures/Client';

export default new EventBuilder('messageCreate').setCallback(
    async (client: ExtendedClient, interaction: Message) => {

        let message: String;
        let command: String[] = [];
        let member: GuildMember;

        if (interaction.author.bot || interaction.author.system) return;
        message = interaction.content;
        
        if (!message.startsWith('º')) return;

        console.log(message);

        command = message.substring(1).split(' ')!;
        member = interaction.member!;
        member;

        if (command[0] === 'train') {
            if (command.length !== 1) return;

            return Commands.train(interaction);
        }

        if (command[0] === 'ping') {
            if (command.length !== 1) return;

            return interaction.reply('pong con '+client.ws.ping+'ms');
        }

        return;
    }
);