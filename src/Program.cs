using hashcode2019.src.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace hashcode2019
{
    class Program
    {
        static void Main(string[] args)
        {
            // Validation arguments
            if(args == null || args.Length != 1){
                throw new Exception("Un seul argument attendu par Program, le chemin vers le fichier de configuration");
            }
            string configPath = args[0];

            // Récupération de la configuration
            Config config = new ConfigBuilder(configPath).Build();

            // Récupération de l'input
            var input = new InputBuilder(config.InputPath).Build();

            // Traitement
            var slides = new List<Slide>();
            input.ToList().ForEach(x =>
            {
                slides.Add(new Slide(x));
            });

            // Ecriture de l'output
            var writer = new OutputWriter(slides, config.OutputPath);
            writer.Write();
        }

    }
}
