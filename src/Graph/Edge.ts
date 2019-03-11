import { Node } from './Node'

export class Edge<T> {

    node1: Node<T>
    node2: Node<T>
    weight?: number

    constructor(node1: Node<T>, node2: Node<T>, weight?: number){
        this.node1 = node1
        this.node2 = node2
        this.weight = weight
    }

}