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

    writeTotal(total: number){
        this.writer.write(`${total}\n`)
    }

    write(output: Output): void {
        if(output.id2 !== null){
            this.writer.write(`${output.id1} ${output.id2}\n`)
        }
        else {
            this.writer.write(`${output.id1}\n`)
        }
    }

    end() {
        this.writer.end()
    }
}