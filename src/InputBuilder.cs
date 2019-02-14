using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace hashcode2019 {

    public class InputBuilder {

        public InputBuilder(string path){
            Path = path;
        }

        public string Path { get; set; }

        public Input Build(){
            if(File.Exists(Path)){
                Input intput = new Input();
                using(StreamReader s = new StreamReader(Path, Encoding.UTF8)){
                    intput.Line1 = s.ReadLine();
                    intput.Line2 = s.ReadLine();
                    intput.Numbers = ParseNumbers(s.ReadLine());
                    return intput;
                }                
            }
            else {
                throw new Exception("Le fichier d'input n'existe pas");
            }
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