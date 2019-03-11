import { expect, assert } from 'chai'
import { Graph } from './Graph'
import { Node } from './Node'

describe('Graph', () => {

    it('should intialize empty', () => {
        let graph = new Graph<string>()
        expect(graph.nodes.entries.length).to.equals(0)
        expect(graph.edges.length).to.equals(0)
    })

    it('should add node', () => {
        let graph = new Graph<string>()
        let id = 1
        let value = 'test'
        graph.addNode(id, value)
        let newNode = graph.nodes.get(id)
        expect(graph.nodes.size).to.equals(1)
        expect(newNode).not.to.be.undefined
        if(newNode){
            expect(newNode.id).to.equals(id)
            expect(newNode.data).to.equals(value)
        }        
    })

    it('should not add node if id is already used', () => {
        let graph = new Graph<string>()
        let id = 1
        let value = 'test'
        graph.addNode(id, value)
        expect(() => graph.addNode(id, value)).to.throw()
    })

    it('should add edge', () => {
        let graph = new Graph<string>()
        let id1 = 1
        let value1 = 'test1'
        let id2 = 2
        let value2 = 'test2'
        graph.addNode(id1, value1)
        graph.addNode(id2, value2)
        graph.addEdge(id1, id2)
        let edge = graph.edges[0]
        expect(graph.edges.length).to.equals(1)
        expect(edge.node1).to.equals(graph.nodes.get(id1))
        expect(edge.node2).to.equals(graph.nodes.get(id2))
        expect(edge.weight).to.be.undefined
    })

    it('should add edge with weight', () => {
        let graph = new Graph<string>()
        let id1 = 1
        let value1 = 'test1'
        let id2 = 2
        let value2 = 'test2'
        let weight = 10
        graph.addNode(id1, value1)
        graph.addNode(id2, value2)
        graph.addEdge(id1, id2, weight)
        let edge = graph.edges[0]
        expect(graph.edges.length).to.equals(1)
        expect(edge.node1).to.equals(graph.nodes.get(id1))
        expect(edge.node2).to.equals(graph.nodes.get(id2))
        expect(edge.weight).to.equals(weight)
    })

    it('should add edge in nodes', () => {
        let graph = new Graph<string>()
        let id1 = 1
        let value1 = 'test1'
        let id2 = 2
        let value2 = 'test2'
        let id3 = 3
        let value3 = 'test3'
        graph.addNode(id1, value1)
        graph.addNode(id2, value2)
        graph.addNode(id3, value3)
        graph.addEdge(id1, id2)
        graph.addEdge(id1, id3)
        graph.addEdge(id3, id2)
        expect(graph.nodes.size).to.equals(3)
        expect(graph.edges.length).to.equals(3)
        expect((<Node<string>>graph.nodes.get(id1)).edges.length).to.equals(2)
        expect((<Node<string>>graph.nodes.get(id2)).edges.length).to.equals(2)
        expect((<Node<string>>graph.nodes.get(id3)).edges.length).to.equals(2)
        graph.nodes.forEach((node) => {
            node.edges.forEach((edge) => {
                expect(edge.node1.id === node.id || edge.node2.id === node.id).to.be.true
                expect(edge.node1.id === node.id && edge.node2.id === node.id).to.be.false
            })
        })
    })

    it('should not add edge if id1 doesnt exist', () => {
        let graph = new Graph<string>()
        let id1 = 1
        let value1 = 'test1'
        let id2 = 2
        let value2 = 'test2'
        let weight = 10
        graph.addNode(id2, value2)
        expect(() => graph.addEdge(id1, id2, weight)).to.throw()
    })

    it('should not add edge if id2 doesnt exist', () => {
        let graph = new Graph<string>()
        let id1 = 1
        let value1 = 'test1'
        let id2 = 2
        let value2 = 'test2'
        let weight = 10
        graph.addNode(id1, value1)
        expect(() => graph.addEdge(id1, id2, weight)).to.throw()
    })

})