using System;
using System.Collections.Generic;
using System.Text;

namespace hashcode2019.src.Models
{
    public class Slide
    {
        public Photo Photo1 { get; }
        public Photo Photo2 { get; }

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
