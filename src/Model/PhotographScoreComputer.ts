import { Photograph } from "./Photograph";
import { distinct, common } from '../Util/ArrayUtil'

export class PhotographScoreComputer {

    compute(photograph1: Photograph, photograph2: Photograph): number {
        let nbDistinctTags = distinct(photograph1.tags, photograph2.tags).length
        let nbCommonTags = common(photograph1.tags, photograph2.tags).length
        if(nbCommonTags > 0){
            return nbCommonTags + (nbDistinctTags / 2)
        }
        else {
            return 0
        }
    }
    
}