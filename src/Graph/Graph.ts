import { Node } from './Node'
import { Edge } from './Edge'

export class Graph<T> {

    nodes: Map<number, Node<T>>
    edges: Edge<T>[]    

    constructor(){
        this.nodes = new Map<number, Node<T>>()
        this.edges = []
    }

    addNode(id: number, data: T): void {
        if(!this.nodes.get(id)){
            this.nodes.set(id, new Node<T>(id, data))
        }
        else {
            throw Error(`The id [${id}] already exists`)
        }
    }
    
    addEdge(id1: number, id2: number, weight?: number){
        let node1 = this.nodes.get(id1)
        let node2 = this.nodes.get(id2)
        if(!node1){
            throw Error(`Node not found with id1 [${id1}]`)
        }
        if(!node2){
            throw Error(`Node not found with id2 [${id2}]`)
        }
        let edge = new Edge<T>(node1, node2, weight)
        this.edges.push(edge)
        node1.edges.push(edge)
        node2.edges.push(edge)
    }

}