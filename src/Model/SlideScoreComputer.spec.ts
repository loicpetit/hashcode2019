import { Photograph } from "./Photograph";
import { Slide } from "./Slide";
import { SlideScoreComputer } from "./SlideScoreComputer";
import { expect } from "chai";

describe('SlideScoreComputer', () => {

    let p1:Photograph, p2:Photograph, p3:Photograph, p4:Photograph

    beforeEach(() => {
        p1 = {
            id: 1,
            isHorizontal: true,
            tags: ['t1', 't2', 't3', 't4', 't5', 't6']
        }
        p2 = {
            id: 1,
            isHorizontal: true,
            tags: ['t4', 't5', 't6', 't7', 't8']
        }
        p3 = {
            id: 1,
            isHorizontal: true,
            tags: ['t3', 't4', 't5', 't6', 't7']
        }
        p4 = {
            id: 1,
            isHorizontal: true,
            tags: ['t7']
        }
    })

    it('should compute', () => {
        let s1 = new Slide(p1)
        let s2 = new Slide(p2)
        let s3 = new Slide(p3)
        let computer = new SlideScoreComputer()
        let score1 = computer.compute(s1, s2)
        let score2 = computer.compute(s3, s2)
        expect(score1).to.equals(2)
        expect(score2).to.equals(1)
    })
    it('should compute 0 if no common tags', () => {
        let s1 = new Slide(p1)
        let s4 = new Slide(p4)
        let computer = new SlideScoreComputer()
        let score = computer.compute(s1, s4)
        expect(score).to.equals(0)        
    })
    it('should compute 0 if no distint tags from first slide', () => {
        let s2 = new Slide(p2)
        let s4 = new Slide(p4)
        let computer = new SlideScoreComputer()
        let score = computer.compute(s2, s4)
        expect(score).to.equals(0)
    })
    it('should compute 0 if no distint tags from second slide', () => {
        let s2 = new Slide(p2)
        let s4 = new Slide(p4)
        let computer = new SlideScoreComputer()
        let score = computer.compute(s4, s2)
        expect(score).to.equals(0)
    })

})