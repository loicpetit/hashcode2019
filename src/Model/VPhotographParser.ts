import { Photograph } from './Photograph'
import { Slide } from './Slide'
import { Graph } from '../Graph/Graph'
import { Node } from '../Graph/Node'
import { PhotographScoreComputer } from './PhotographScoreComputer';
import { stringify } from 'querystring';

export class VPhotographParser {
    
    private scoreComputer: PhotographScoreComputer
    private photographs: Graph<Photograph>
    private tags: Map<string, Node<Photograph>[]>

    constructor(scoreComputer: PhotographScoreComputer){
        this.scoreComputer = scoreComputer
        this.photographs = new Graph<Photograph>()
        this.tags = new Map<string, Node<Photograph>[]>()
    }

    add(photograph: Photograph){
        let node = this.photographs.addNode(photograph.id, photograph)
        this.registerNodeTags(node)
        this.registerNodeEdges(node)
    }

    private registerNodeTags(node: Node<Photograph>): void {
        for(let tag of node.data.tags){
            if(!this.tags.has(tag)){
                this.tags.set(tag, [])
            }
            let tagNodes = this.tags.get(tag)
            if(tagNodes){
                tagNodes.push(node)
            }
        }
    }

    private registerNodeEdges(node: Node<Photograph>): void {
        //this.photographs.nodes.forEach((otherNode) => {
        //    if(otherNode.id !== node.id){
        //        let score = this.scoreComputer.compute(otherNode.data, node.data)
        //        if(score >= 0.5){
        //            this.photographs.addEdge(otherNode.id, node.id, score)
        //        }
        //    }
        //})
    }

    getPhotographGraph(): Graph<Photograph> {
        return this.photographs;
    }

}