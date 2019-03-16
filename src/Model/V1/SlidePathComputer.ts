import { Slide } from "../Slide";
import { Photograph } from "../Photograph";
import { PhotographPotentialComputer } from "./PhotographPotentialComputer";
import { SlideScoreComputer } from "../SlideScoreComputer";

export class SlidePathComputer {

    potentialComputer: PhotographPotentialComputer
    scoreComputer: SlideScoreComputer

    constructor(potentialComputer: PhotographPotentialComputer, scoreComputer: SlideScoreComputer){
        this.potentialComputer = potentialComputer
        this.scoreComputer = scoreComputer
    }

    getPath(photographs: Photograph[]): Slide[] {
        photographs.sort(this.compare)
        let slides: Slide[] = []
        let maxTry = 5000
        if(photographs.length > 0) {
            let previousSlide: Slide | null = null
            let previousPhotograph:  Photograph | null = null
            let verticalWaiting = false
            while(photographs.length > 0){
                if(!verticalWaiting){
                    let current = this.getNext(photographs, previousSlide, maxTry)
                    if(current.isHorizontal){
                        let slide = new Slide(current)
                        slides.push(slide)
                        previousSlide = slide
                    }
                    else {
                        verticalWaiting = true
                    }
                    previousPhotograph = current
                }
                else if(verticalWaiting && previousPhotograph) {
                    let current = this.getNextVertical(photographs, previousSlide, previousPhotograph, maxTry)
                    let slide
                    if(current){
                        slide = new Slide(previousPhotograph, current)
                    }
                    else {
                        slide = new Slide(previousPhotograph)
                    }
                    slides.push(slide)
                    previousSlide = slide
                    previousPhotograph = current
                    verticalWaiting = false
                }
                else {
                    throw new Error('vertical waiting et previous photograph null ne devrait pas arriver')
                }
            }
        }
        return slides
    }

    private getNext(photographs: Photograph[], previousSlide: Slide | null, maxTry: number): Photograph {
        let maxIndex = photographs.length -1
        let maxTryIndex = maxTry - 1
        let bestIndex = 0
        let bestScore = null
        if(previousSlide) {
            for(let i=0; i <= maxIndex && i <= maxTryIndex; i++){
                let photograph = photographs[i]
                let slide = new Slide(photograph)
                let score = this.scoreComputer.compute(previousSlide, slide)
                if(bestScore === null || bestScore < score){
                    bestScore = score
                    bestIndex = i
                }
            }
        }
        return photographs.splice(bestIndex, 1)[0]
    }

    private getNextVertical(photographs: Photograph[], previousSlide: Slide | null, previousPhotograph: Photograph, maxTry: number): Photograph | null {
        let maxIndex = photographs.length - 1
        let minTryIndex = maxIndex - maxTry - 1
        let bestIndex = null
        let bestTotal = null
        for(let i=maxIndex; i >= 0 && i >= minTryIndex; i--){
            let photograph = photographs[i]
            if(photograph.isHorizontal){
                continue
            }
            let potential = this.potentialComputer.compute(previousPhotograph, photograph)
            let score = 1
            if(previousSlide) {
                let slide = new Slide(previousPhotograph, photograph)
                score = this.scoreComputer.compute(previousSlide, slide)
            }
            let total = score * potential
            if(bestTotal === null || bestTotal < total){
                bestTotal = total
                bestIndex = i
            }
        }
        if(bestIndex){
            return photographs.splice(bestIndex, 1)[0]
        }
        else {
            return null
        }
    }

    private compare(p1: Photograph, p2: Photograph){
        if(p1.tags.length > p2.tags.length){
            return -1
        }
        else if(p1.tags.length < p2.tags.length){
            return 1
        }
        else {
            return 0
        }
    }

}