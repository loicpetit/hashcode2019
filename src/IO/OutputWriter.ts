import { Writable } from "stream";

export interface Output {
    id1: number,
    id2: number | null
}

export class OutputWriter {

    writer: Writable

    constructor(writable: Writable){
        this.writer = writable
    }

    write(outputs: Output[]): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.writer.write(`${outputs.length}\n`)
            for(let output of outputs){
                if(output.id2 !== null){
                    this.writer.write(`${output.id1} ${output.id2}\n`)
                }
                else {
                    this.writer.write(`${output.id1}\n`)
                }
            }
            this.writer.end()
            resolve()
        })
    }
}