import { Photograph } from './Photograph'

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
            this.tags = this.mergeTags(photograph1.tags, photograph2.tags)
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

    private mergeTags(tags1: string[], tags2: string[]): string[] {
        let tags = Object.assign([], tags1)
        for(let tag2 of tags2){
            if(!tags.includes(tag2)){
                tags.push(tag2)
            }
        }
        return tags
    }

}