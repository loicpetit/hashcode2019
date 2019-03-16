import * as fs from 'fs'
import { InputStream } from './IO/InputStream'
import { OutputWriter } from './IO/OutputWriter'
import * as readline from 'readline'
import { OutputParser } from './Model/OutputParser';
import { InputParser } from './Model/V1/InputParser'
import { SlidePathComputer } from './Model/V1/SlidePathComputer';
import { PhotographPotentialComputer } from './Model/V1/PhotographPotentialComputer';
import { SlideScoreComputer } from './Model/SlideScoreComputer';

export default function(inputPath: string, outputPath: string):Promise<void> {
    
    return new Promise<void>((resolve, reject) => {
        console.log('Hashcode 2019 !')

        // Parse input file
        console.log(`Lecture du fichier input [${inputPath}] et initialisation des arbres...`)
        let inputParser = new InputParser()
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
                let photographs = inputParser.getPhotographs()
                let slidePathComputer = new SlidePathComputer(new PhotographPotentialComputer(), new SlideScoreComputer())
                let slides = slidePathComputer.getPath(photographs)    

                console.log(`Ecriture du fichier output [${outputPath}]...`)
                let outputParser = new OutputParser()
                let writer = new OutputWriter(fs.createWriteStream(outputPath))
                writer.writeTotal(slides.length)
                for(let slide of slides){
                    let output = outputParser.parse(slide)
                    writer.write(output)
                }
                writer.end()
                resolve()
            })
            .onError((error) => {
                console.error('Une erreur lors de la lecture des inputs', error)
            })
    })

}