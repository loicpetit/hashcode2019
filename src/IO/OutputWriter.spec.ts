import { expect, assert } from 'chai'
import { Output, OutputWriter } from './OutputWriter'
import { Writable } from 'stream';

describe('OutputWriter', () => {

    it('should write output file', () => {
        let lines: string[] = []
        let writable = new Writable({
            write: (chunk, encoding, callback) => {
                lines.push(chunk.toString())
                callback()
            }
        })
        let outputs: Output[] = [{
            id1: 1,
            id2: null
        }, {
            id1: 3,
            id2: 2
        }, {
            id1: 4,
            id2: null
        }]
        let outputWriter = new OutputWriter(writable)
        return outputWriter.write(outputs).then(() => {
            expect(lines.length).to.equals(outputs.length + 1)
            expect(lines[0]).to.equals('3\n')
            expect(lines[1]).to.equals('1\n')
            expect(lines[2]).to.equals('3 2\n')
            expect(lines[3]).to.equals('4\n')
        })
    })

})