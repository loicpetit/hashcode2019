import { Slide } from "./Slide";
import { exclude, common } from '../Util/ArrayUtil'

export class SlideScoreComputer {

    compute(slide1: Slide, slide2: Slide): number {
        let nbCommonTags = common(slide1.tags, slide2.tags).length
        let nbDisctinctTags1 = exclude(slide1.tags, slide2.tags).length
        let nbDisctinctTags2 = exclude(slide2.tags, slide1.tags).length
        return Math.min(nbCommonTags, nbDisctinctTags1, nbDisctinctTags2)
    }
    
}