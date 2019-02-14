using System;

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
            Input input = new InputBuilder(config.InputPath).Build();

            // Traitement
            Hello h = new Hello(config.Name);
            h.Display();
            Hello h2 = new Hello(input.Line1);
            h2.Display();
            Output output = null;

            // Ecriture de l'output
            OutputWriter writer = new OutputWriter(output, config.OutputPath);
            writer.Write();
        }

    }
}
