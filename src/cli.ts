#!/usr/bin/env node

import main from './index'

let args = process.argv.slice(2)
if(args.length != 2){
    throw 'Attends deux arguments : le chemin vers le fichier input et le chemin du fichier output'
}
let inputPath = args[0]
let outputPath = args[1]

main(inputPath, outputPath)
