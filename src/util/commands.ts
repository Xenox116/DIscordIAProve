import { spawn } from "child_process";
import type { Message } from 'discord.js';

export class Commands {

    private static pythonPath: String = 'src/util/python/';

    static train(interaction: Message) {

        const aux: number[] = [];

        const send: string = JSON.stringify(aux);

        const python = spawn('python', [this.pythonPath + 'train.py', send])

        python.stdout.on('data', (data: string) => {

            if (data.toString().startsWith('[')) {

                const res: number[] = JSON.parse(data.toString());
                const perc: number = Number((res[0]! * 100).toFixed(2));
                interaction.reply('Precision de entrenamiento: ' + perc + '%');
            } else {
                console.log(data.toString());
            }

        })
        python.stderr.on('data', (data) => {
            console.error('stderr: ' + data);
        })
        python.on('close', (data) => {
            console.log('terminated with ' + data);
        })
    }
}