import { Input } from '../../IO/InputStream'
import { Photograph } from '../Photograph'

export class InputParser {

    private photograghs: Photograph[]

    constructor(){
        this.photograghs = []
    }

    add(input: Input){
        let photograph: Photograph = {
            id: input.id,
            isHorizontal: input.isHorizontal,
            tags: input.tags
        }
        this.photograghs.push(photograph)
    }

    getPhotographs(): Photograph[] {
        return this.photograghs;
    }

}