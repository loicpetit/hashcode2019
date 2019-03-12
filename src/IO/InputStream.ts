import { EventEmitter } from 'events';

export interface Input {
    id: number,
    isHorizontal: boolean,
    tags: string[]
}

export class InputStream {

    reader: EventEmitter
    event: EventEmitter
    reading: boolean

    constructor(reader: EventEmitter){
        this.reader = reader
        this.event = new EventEmitter()
        this.reading = false;
    }

    onExpected(callback: (nb: number) => void): InputStream {
        return this.onEvent('expected', callback)
    }

    onInput(callback: (input: Input) => void): InputStream {
        return this.onEvent('input', callback)
    }

    onEnd(callback: () => void): InputStream {
        return this.onEvent('end', callback)
    }

    onError(callback: (error: Error) => void): InputStream {
       return this.onEvent('error', callback)
    }

    private onEvent(name: string, callback: (arg: any) => void): InputStream {
        this.event.on(name, callback)
        this.getInputs()
        return this
    }
    
    private getInputs(): void {
        if(this.reading){
            return
        }
        this.reading = true
        let nbLine = 0
        this.reader.on('line', (line) => {
            nbLine++
            if(nbLine > 1){
                let index: number = nbLine - 2
                let input: Input | null = this.parseLine(line, index)
                if(input){
                    this.event.emit('input', input)
                }
            }
            else {
                let expected: number = Number.parseInt(line)
                this.event.emit('expected', expected)
            }
        })
        this.reader.on('close', () => {
            this.event.emit('end')
        })
        this.reader.on('error', (error: Error) => {
            this.event.emit('error', error)            
        })
    }

    private parseLine(line: string, index: number): Input | null {
        let split = line.split(' ')
        if(split.length >= 3){
            let direction = split[0]
            let tags = split.slice(2)
            return {
                id: index,
                isHorizontal: direction === 'H',
                tags: tags
            }
        }
        return null;
    }
}
