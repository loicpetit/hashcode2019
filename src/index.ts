import { InputStream } from './IO/InputStream'
import { OutputWriter } from './IO/OutputWriter'

console.log('Hashcode 2019 !')

// Get arguments
let args = process.argv.slice(2)
if(args.length != 2){
    throw 'Attends deux arguments : le chemin vers le fichier input et le chemin du fichier output'
}
let inputPath = args[0]
let outputPath = args[1]

// Parse input file
console.log(`Lecture du fichier input [${inputPath}] et initialisation des arbres...`)

// Process data
console.log('Creation des slides avec des photos verticales...')
console.log('Calcul des slides optimales...')

// Write output file
console.log(`Ecriture du fichier output [${outputPath}]...`)
