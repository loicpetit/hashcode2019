using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace hashcode2019 {

    public class InputBuilder {

        public InputBuilder(string path){
            Path = path;
        }

        public string Path { get; set; }

        public IEnumerable<Photo> Build()
        {
            var collection = new List<Photo>();
            var lines = File.ReadAllLines(Path).ToList();
            var totalLines = Convert.ToInt32(lines[0].Trim());

            for(var i=1; i< lines.Count(); i++ )
            {
                var parts = lines[i].Split(' ');
                var photo = new Photo
                {
                    Id = i - 1,
                    IsHorizontal = parts[0].Equals("H"),
                    Tags = parts.Skip(2).ToList()
                };

                collection.Add(photo);
            }

            return collection;
        }

        private int[] ParseNumbers(string line){
            List<int> numbers = new List<int>();
            foreach(string word in line.Split(' ')){
                int nb;
                if(Int32.TryParse(word, out nb)){
                    numbers.Add(nb);
                }
            }
            return numbers.ToArray();
        }

    }
}