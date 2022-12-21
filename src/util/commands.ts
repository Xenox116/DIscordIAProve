import { spawn } from "child_process";

export class Commands {

    private static pythonPath: String = 'src/util/python/';

    static test() {

        const aux: Number[] = [1,3,4];

        const python = spawn('python', [this.pythonPath + 'test.py', JSON.stringify(aux)])

        python.stdout.on('data', (data) => {
            console.log('stdout:');
            console.log(JSON.parse(data.toString()));
        })
        python.stderr.on('data', (data) => {
            console.error('stderr: ' + data);
        })
        python.on('close', (data) => {
            console.log('terminated with ' + data);
        })
    }
}