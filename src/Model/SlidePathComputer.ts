import { Graph } from "../Graph/Graph";
import { Slide } from "./Slide";

export class SlidePathComputer {

    graph: Graph<Slide>

    constructor(graph: Graph<Slide>){
        this.graph = graph
    }

    getPath(): Slide[] {
        return []
    }

}