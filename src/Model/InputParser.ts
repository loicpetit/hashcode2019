import { Input } from '../IO/InputStream'
import { Photograph } from './Photograph'
import { Slide } from './Slide'
import { Graph } from '../Graph/Graph'
import { VPhotographParser } from './VPhotographParser'

export class InputParser {

    private vPhotographParser: VPhotographParser
    private slides: Graph<Slide>

    constructor(vPhotographParser: VPhotographParser){
        this.vPhotographParser = vPhotographParser
        this.slides = new Graph<Slide>()
    }

    add(input: Input){

    }

    getSlideGraph(): Graph<Slide> {
        //let slidesFromVerticalPhotographs = this.vPhotographParser.getSlides()
        //for(let slide of slidesFromVerticalPhotographs){
        //    this.slides.addNode(-1, slide)
        //}
        return this.slides;
    }

}