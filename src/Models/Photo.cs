using hashcode2019.src.Services;
using System;
using System.Collections.Generic;

namespace hashcode2019
{

    public class Photo : IScorable
    {
        public int Id { get; set; }
        public bool IsHorizontal { get; set; }
        public int NumberOfTags => Tags.Count;
        public IList<string> Tags { get; set; } = new List<string>();

        public IList<Tuple<IScorable, int>> Scores { get; set; } = new List<Tuple<IScorable, int>>();

        public override string ToString()
        {
            return Id.ToString();
        }
    }
}