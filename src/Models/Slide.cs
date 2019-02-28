using hashcode2019.src.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace hashcode2019.src.Models
{
    public class Slide : IScorable
    {
        public Photo Photo1 { get; }
        public Photo Photo2 { get; }

        public IList<string> Tags { get; set; } = new List<string>();
        public IList<Tuple<IScorable, int>> Scores { get; set; } = new List<Tuple<IScorable, int>>();

        public Slide() { }

        public Slide(Photo p1)
        {
            Photo1 = p1;
            Tags = p1.Tags;
        }

        public Slide(Photo p1, Photo p2)
        {
            if (p1.IsHorizontal || p2.IsHorizontal)
                throw new InvalidOperationException("Cannot put any horizontal pics on a slide with 2 pics!");

            Photo1 = p1;
            Photo2 = p2;

            Tags = p1.Tags;

            // unique tags
            p2.Tags.ToList().ForEach(x =>
            {
                if (!Tags.Contains(x)) Tags.Add(x);
            });
        }
    }
}
