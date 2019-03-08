export class Photograph {

    id: number
    isHorizontal: boolean
    tags: string[]

    constructor(id: number, isHorizontal: boolean, tags: string[]){
        this.id = id
        this.isHorizontal = isHorizontal
        this.tags = tags
    }
}