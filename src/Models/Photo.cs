using System;
using System.Collections.Generic;

namespace hashcode2019 {

    public class Photo
    {
        public int Id { get;set; }
        public bool IsHorizontal { get; set; }
        public int NumberOfTags => Tags.Count;
        public List<string> Tags { get; set; } = new List<string>();

        public override string ToString()
        {
            return Id.ToString();
        }
    }
}