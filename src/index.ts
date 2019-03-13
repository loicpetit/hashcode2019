import * as fs from 'fs'
import { InputStream } from './IO/InputStream'
import { OutputWriter } from './IO/OutputWriter'
import * as readline from 'readline'
import { InputParser } from './Model/InputParser'
import { OutputParser } from './Model/OutputParser';
import { SlidePathComputer } from './Model/SlidePathComputer';
import { VPhotographParser } from './Model/VPhotographParser';
import { PhotographScoreComputer } from './Model/PhotographScoreComputer';
import { VSlideComputer } from './Model/VSlidesComputer';

export default function(inputPath: string, outputPath: string):Promise<void> {
    
    return new Promise<void>((resolve, reject) => {
        console.log('Hashcode 2019 !')

        // Parse input file
        console.log(`Lecture du fichier input [${inputPath}] et initialisation des arbres...`)
        let vPhotographParser = new VPhotographParser(new PhotographScoreComputer())
        let vSlideComputer = new VSlideComputer()
        let inputParser = new InputParser(vPhotographParser, vSlideComputer)
        let inputStream = new InputStream(readline.createInterface({
            input: fs.createReadStream(inputPath, 'UTF-8')
        }))
        inputStream
            .onInput((input) => {
                inputParser.add(input)
                process.stdout.write('.')
            })
            .onEnd(() => {
                console.log()

                console.log('Calcul des slides optimales...')
                let graph = inputParser.getSlideGraph()
                let slidePathComputer = new SlidePathComputer()
                let slides = slidePathComputer.getPath(graph)    

                console.log(`Ecriture du fichier output [${outputPath}]...`)
                let outputParser = new OutputParser()
                //let writer = new OutputWriter(fs.createWriteStream(outputPath))
                for(let slide of slides){
                    let output = outputParser.parse(slide)
                    //writer.write(output)
                }
                //writer.end()
                resolve()
            })
            .onError((error) => {
                console.error('Une erreur lors de la lecture des inputs', error)
            })
    })

}