import { expect, assert } from 'chai'
import { InputStream } from './InputStream'
import { Readable } from 'stream';

describe('InputStream', () => {

    it('should stream input file', (done) => {
        let lines = [
            '2',
            'H tag1 tag2',
            'V tag2 tag4'
        ]
        let readable = new Readable()
        let inputstream = new InputStream(readable)
        inputstream.onInput((input) => {
            expect(input).not.to.be.null
            expect(input.id).to.be.within(0, 1)
            if(input.id === 0){
                expect(input.isHorizontal).to.be.true
                expect(input.tags).to.deep.equal(['tag1', 'tag2'])
            }
            else if (input.id === 1){
                expect(input.isHorizontal).to.be.false
                expect(input.tags).to.deep.equal(['tag2', 'tag4'])
            }
        })
        inputstream.onEnd(done)
        emitLines(readable, lines)
    })

    function emitLines(readable: Readable, lines: String[]){
        for(let line of lines){
            readable.emit('line', line)
        }
        readable.emit('close')
    }

})