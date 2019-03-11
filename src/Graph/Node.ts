import { Edge } from './Edge'

export class Node <T> {

    id: number
    data: T
    edges: Edge<T>[]

    constructor(id: number, data: T){
        this.id = id
        this.data = data
        this.edges = []
    }

}