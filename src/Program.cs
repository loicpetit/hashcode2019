﻿using hashcode2019.src.Models;
using hashcode2019.src.Services;
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

            // vertical pics 
            //var verticalPics = input.Where(x => !x.IsHorizontal);

            // compute scores for vertical pics with other vertical pics
            var computePhotoService = new ScoreService<Photo>();
            computePhotoService.Arrange(input);

            // associate pics
            SlideService slideService = new SlideService();
            var slides = slideService.GetSlides(input.ToList());

            // compute slides scores
            var computeSlideService = new ScoreService<Slide>();
            computeSlideService.Arrange(slides);

            // generate final slides
            var slideshow = slideService.GetCollectionSlides(slides);


            // Ecriture de l'output
            var writer = new OutputWriter(slideshow, config.OutputPath);
            writer.Write();
        }

    }
}
