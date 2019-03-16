import { expect, assert } from 'chai'
import { Photograph } from './Photograph'
import { Slide } from './Slide'

describe('Slide', () => {

    let hphoto: Photograph, vphoto1: Photograph, vphoto2: Photograph, vphoto3: Photograph

    beforeEach(() => {
        hphoto = new Photograph(0, true, ['tag1', 'tag2'])
        vphoto1 = new Photograph(1, false, ['tag3', 'tag4'])
        vphoto2 = new Photograph(2, false, ['tag5', 'tag6'])
        vphoto3 = new Photograph(3, false, ['tag6', 'tag7'])
    })

    describe('1 photograh', () => {

        it('should set properties', () => {
            let slide = new Slide(hphoto)
            expect(slide.photograph1).to.equal(hphoto)
            expect(slide.photograph2).to.be.undefined
            expect(slide.tags).to.not.equals(hphoto.tags)
            expect(slide.tags).to.deep.equals(hphoto.tags)
        })

    })

    describe('2 photographs', () => {

        it('should set properties', () => {
            let slide = new Slide(vphoto1, vphoto2)
            expect(slide.photograph1).to.equals(vphoto1)
            expect(slide.photograph2).to.equals(vphoto2)
            expect(slide.tags).to.not.equals(vphoto1.tags)
            expect(slide.tags).to.not.equals(vphoto2.tags)
            expect(slide.tags).to.deep.equals(vphoto1.tags.concat(vphoto2.tags))            
        })

        it('should throw error if the first photograph is horizontal', () => {
            expect(() => new Slide(hphoto, vphoto1)).to.throw()
        })

        it('should throw error if the second photograph is horizontal', () => {
            expect(() => new Slide(vphoto1, hphoto)).to.throw()
        })

        it('should merge tags', () => {
            let slide = new Slide(vphoto3, vphoto2)
            expect(slide.tags).to.deep.equals([vphoto3.tags[0], vphoto3.tags[1], vphoto2.tags[0]])
        })

    })

})