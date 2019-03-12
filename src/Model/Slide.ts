import { Photograph } from './Photograph'
import { merge } from '../Util/ArrayUtil'

export class Slide {

    photograph1: Photograph
    photograph2?: Photograph
    tags: string[]

    constructor(photograph1: Photograph, photograph2?: Photograph){
        
        if(photograph2){
            if(photograph1.isHorizontal || photograph2.isHorizontal){
                throw new Error('Les deux photos d\'une slide doivent etre vertical')
            }
            this.photograph1 = photograph1
            this.photograph2 = photograph2
            this.tags = []
            this.tags = merge(photograph1.tags, photograph2.tags)
        }
        else {
            if(!photograph1.isHorizontal){
                throw new Error('La photo unique d\'une slide doit etre horizontale')
            }
            this.photograph1 = photograph1
            this.tags = []
            this.tags = Object.assign([], photograph1.tags)
        }
    }

}