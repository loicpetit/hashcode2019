import { Photograph } from './Photograph'
import { Slide } from './Slide'
import { Graph } from '../Graph/Graph'

export class VPhotographParser {
    
    private photographs: Graph<Photograph>

    constructor(){
        this.photographs = new Graph<Photograph>()
    }

    add(input: Photograph){

    }

    getSlides(): Slide[] {
        return [];
    }

}