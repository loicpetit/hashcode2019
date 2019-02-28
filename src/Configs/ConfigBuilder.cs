using System;
using System.IO;
using System.Text;

namespace hashcode2019
{

    public class ConfigBuilder
    {

        public ConfigBuilder(string path)
        {
            Path = path;
        }

        public string Path { get; set; }

        public Config Build()
        {
            if (File.Exists(Path))
            {
                Config config = new Config();
                using (StreamReader s = new StreamReader(Path, Encoding.UTF8))
                {
                    string line = null;
                    do
                    {
                        line = s.ReadLine();
                        if (line != null)
                        {
                            string[] keyValue = line.Split("=");
                            if (keyValue.Length == 2)
                            {
                                string key = keyValue[0].Trim().ToLower();
                                string value = keyValue[1].Trim();
                                switch (key)
                                {
                                    case "name":
                                        config.Name = value;
                                        break;
                                    case "input":
                                        config.InputPath = value;
                                        break;
                                    case "output":
                                        config.OutputPath = value;
                                        break;
                                }
                            }
                        }
                    }
                    while (line != null);
                    return config;
                }
            }
            else
            {
                throw new Exception("Le fichier de configuration n'existe pas");
            }
        }

    }
}