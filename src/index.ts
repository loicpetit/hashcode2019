import * as fs from 'fs'
import { InputStream } from './IO/InputStream'
import { OutputWriter } from './IO/OutputWriter'
import * as readline from 'readline'

export default function(inputPath: string, outputPath: string):Promise<void> {
    
    return new Promise<void>((resolve, reject) => {
        console.log('Hashcode 2019 !')

        // Parse input file
        console.log(`Lecture du fichier input [${inputPath}] et initialisation des arbres...`)
        let stream = fs.createReadStream(inputPath, 'UTF-8')
        let reader = readline.createInterface({
            input: stream
        })
        let inputStream = new InputStream(reader)
        inputStream
            .onInput((input) => {
                process.stdout.write('.')
            })
            .onEnd(() => {
                console.log()
                // Process data
                console.log('Creation des slides avec des photos verticales...')
                console.log('Calcul des slides optimales...')        
                // Write output file
                console.log(`Ecriture du fichier output [${outputPath}]...`)

                resolve()
            })
            .onError((error) => {
                console.error('Une erreur lors de la lecture des inputs', error)
            })
    })

}