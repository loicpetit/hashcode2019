import { expect, assert } from 'chai'
import { InputStream } from './InputStream'
import { EventEmitter } from 'events';

describe('InputStream', () => {

    it('should stream input file', (done) => {
        let lines = [
            '2',
            'H 2 tag1 tag2',
            'V 2 tag2 tag4 tag5'
        ]
        let reader = new EventEmitter()
        let inputstream = new InputStream(reader)
        let nbInput = 0
        inputstream.onInput((input) => {
            expect(input).not.to.be.null
            expect(input.id).to.be.within(0, 1)
            if(input.id === 0){
                expect(input.isHorizontal).to.be.true
                expect(input.tags).to.deep.equal(['tag1', 'tag2'])
                nbInput++
            }
            else if (input.id === 1){
                expect(input.isHorizontal).to.be.false
                expect(input.tags).to.deep.equal(['tag2', 'tag4', 'tag5'])
                nbInput++
            }
            else {
                throw new Error('Input inconnue')
            }
        })
        inputstream.onEnd(() => {
            expect(nbInput, 'Nb inputs').to.equals(2)
            done()
        })
        emitLines(reader, lines)
    })

    function emitLines(reader: EventEmitter, lines: String[]){
        for(let line of lines){
            reader.emit('line', line)
        }
        reader.emit('close')
    }

})