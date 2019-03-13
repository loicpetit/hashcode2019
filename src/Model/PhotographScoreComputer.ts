import { Photograph } from "./Photograph";
import { distinct, common } from '../Util/ArrayUtil'

export class PhotographScoreComputer {

    compute(photograph1: Photograph, photograph2: Photograph): number {
        let nbCommonTags = common(photograph1.tags, photograph2.tags).length
        if(nbCommonTags > 0){
            let nbDistinctTags = distinct(photograph1.tags, photograph2.tags).length
            if(nbCommonTags === nbDistinctTags){
                return 2
            }
            else if (nbCommonTags > nbDistinctTags){
                return 1.0 / (nbCommonTags - nbDistinctTags)
            }
            else {
                return 1.0 / (nbDistinctTags - nbCommonTags)
            }
        }
        else {
            return 0
        }
    }
    
}