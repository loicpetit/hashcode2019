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

    it('should compute number of tags if same tags', () => {
        let p1: Photograph = {
            id: 1,
            isHorizontal: false,
            tags: ['tag1', 'tag2']
        }
        let p2: Photograph = {
            id: 2,
            isHorizontal: false,
            tags: ['tag2', 'tag1']
        }
        let computer = new PhotographScoreComputer()
        let score = computer.compute(p1, p2)
        expect(score).to.equals(2)
    })

    it('should compute number of commom tags and half of number of distint tags', () => {        
        let p1: Photograph = {
            id: 1,
            isHorizontal: false,
            tags: ['tag1', 'tag2', 'tag3']
        }
        let p2: Photograph = {
            id: 2,
            isHorizontal: false,
            tags: ['tag2', 'tag4', 'tag3']
        }
        let computer = new PhotographScoreComputer()
        let score = computer.compute(p1, p2)
        expect(score).to.equals(3)
    })

})