#!/usr/bin/env node

import main from './index'

(async () => {
    try { 
        let args = process.argv.slice(2)
        if(args.length != 2){
            throw 'Attends deux arguments : le chemin vers le fichier input et le chemin du fichier output'
        }
        let inputPath = args[0]
        let outputPath = args[1]    
        await main(inputPath, outputPath)
    }
    catch(e) {
        console.error('Une erreur inattendue s\' est produite', e)
    }
})()
