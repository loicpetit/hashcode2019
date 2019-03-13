import { Photograph } from "./Photograph";
import { PhotographScoreComputer } from "./PhotographScoreComputer";
import { expect } from "chai";

describe('PhotographScoreCompute', () => {

    it('should compute 0 if no common tags', () => {
        let p1: Photograph = {
            id: 1,
            isHorizontal: false,
            tags: ['tag1']
        }
        let p2: Photograph = {
            id: 2,
            isHorizontal: false,
            tags: ['tag2']
        }
        let computer = new PhotographScoreComputer()
        let score = computer.compute(p1, p2)
        expect(score).to.equals(0)
    })

    it('should compute if nb common tags equals nb distinct tags', () => {
        let p1: Photograph = {
            id: 1,
            isHorizontal: false,
            tags: ['tag1', 'tag2', 'tag4']
        }
        let p2: Photograph = {
            id: 2,
            isHorizontal: false,
            tags: ['tag2', 'tag1', 'tag3']
        }
        let computer = new PhotographScoreComputer()
        let score = computer.compute(p1, p2)
        expect(score).to.equals(2)
    })

    it('should compute lower value depending on the difference between nb common tags and nb distinct tags', () => {        
        let p1: Photograph = {
            id: 1,
            isHorizontal: false,
            tags: ['tag1']
        }
        let p2: Photograph = {
            id: 2,
            isHorizontal: false,
            tags: ['tag1', 'tag2']
        }
        let p3: Photograph = {
            id: 3,
            isHorizontal: false,
            tags: ['tag2', 'tag3', 'tag1']
        }
        let p4: Photograph = {
            id: 4,
            isHorizontal: false,
            tags: ['tag4', 'tag1', 'tag3', 'tag2']
        }
        let computer = new PhotographScoreComputer()
        let score12 = computer.compute(p1, p2)
        let score13 = computer.compute(p1, p3)
        let score14 = computer.compute(p1, p4)
        let score23 = computer.compute(p2, p3)
        let score24 = computer.compute(p2, p4)
        let score34 = computer.compute(p3, p4)
        expect(score12, 'score12').to.equals(2.0)
        expect(score13, 'score13').to.equals(1.0)
        expect(score14, 'score14').to.equals(0.5)
        expect(score23, 'score23').to.equals(1.0)
        expect(score24, 'score24').to.equals(2.0)
        expect(score34, 'score34').to.equals(0.5)
    })

})