import { Input } from '../IO/InputStream'
import { Photograph } from './Photograph'
import { Slide } from './Slide'
import { Graph } from '../Graph/Graph'
import { VPhotographParser } from './VPhotographParser'
import { VSlideComputer } from './VSlidesComputer';

export class InputParser {

    private vPhotographParser: VPhotographParser
    private vSlideComputer: VSlideComputer;
    private slides: Graph<Slide>

    constructor(vPhotographParser: VPhotographParser, vSlidesComputer: VSlideComputer){
        this.vPhotographParser = vPhotographParser
        this.vSlideComputer = vSlidesComputer
        this.slides = new Graph<Slide>()
    }

    add(input: Input){
        let photograph: Photograph = {
            id: input.id,
            isHorizontal: input.isHorizontal,
            tags: input.tags
        }
        if (photograph.isHorizontal) {
            let slide = new Slide(photograph)
            this.addSlide(slide)
        }
        else {
            this.vPhotographParser.add(photograph)
        }
    }

    private addSlide(slide: Slide){
        let node = this.slides.addNode(slide.photograph1.id, slide);
    }

    getSlideGraph(): Graph<Slide> {
        let vGraph = this.vPhotographParser.getPhotographGraph()
        let vSlides = this.vSlideComputer.getSlides(vGraph)
        for(let slide of vSlides){
            this.addSlide(slide)
        }
        return this.slides;
    }

}