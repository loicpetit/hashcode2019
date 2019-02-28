using hashcode2019.src.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace hashcode2019.src.Models
{
    public class Slide : IScorable
    {
        public Photo Photo1 { get; }
        public Photo Photo2 { get; }

        public IList<string> Tags { get; set; } = new List<string>();
        public IList<Tuple<IScorable, int>> Scores { get; set; } = new List<Tuple<IScorable, int>>();

        public Slide(Photo p1)
        {
            Photo1 = p1;
        }

        public Slide(Photo p1, Photo p2)
        {
            Photo1 = p1;
            Photo2 = p2;
        }
    }
}
