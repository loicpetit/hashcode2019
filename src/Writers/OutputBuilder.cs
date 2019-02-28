using hashcode2019.src.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace hashcode2019
{

    public class OutputWriter
    {

        public List<Slide> Slides { get; }
        public string Path { get; }

        public OutputWriter(List<Slide> slides, string path)
        {
            Slides = slides;
            Path = path;
        }

        public void Write()
        {
            if (File.Exists(Path))
                File.Delete(Path);

            Console.WriteLine("Writing output...");
            File.AppendAllText(Path, Slides.Count.ToString() + Environment.NewLine);

            Slides.ForEach(x =>
            {
                var line = x.Photo1.ToString();
                if (null != x.Photo2)
                    line += " " + x.Photo2.ToString();
                line += Environment.NewLine;

                File.AppendAllText(Path, line);
            });

            Console.WriteLine("Done!");
        }

    }
}