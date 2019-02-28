using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace hashcode2019 {

    public class OutputWriter {

        public OutputWriter(Output output, string path){
            Output = output;
            Path = path;
        }

        public Output Output { get; set; }
        public string Path { get; set; }

        public void Write(){
            
        }

    }
}