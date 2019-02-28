using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace hashcode2019.src.Services
{
    public class ScoreService<T> where T : IScorable, new()
    {
        public void Arrange(IEnumerable<T> items)
        {
            var itemsList = items?.ToList();
            foreach(var item in itemsList)
            {
                Compute(item, itemsList);
            }
        }

        private void Compute(T item, List<T> items)
        {   
            foreach(var it in items)
            {
                if (it.Equals(item))
                    continue;
                var t = Compute(item, it);
            }
        }

        private int Compute(T item1, T item2)
        {
            var scoreA = CommonTag(item1?.Tags, item2?.Tags);
            var scoreB = 0;
            var scoreC = 0;

            
            return Math.Min(scoreA, Math.Min(scoreB, scoreC));
        }

        private int CommonTag(IList<string> tags1, IList<string> tags2)
        {
            if (tags1 == null || tags2 == null)
                return 0;

            var common = 0;
            foreach (var tag in tags1)
            {
                common += tags2.Contains(tag) ? 1 : 0;
            }

            return common;
        }

        private int TagsOnly(IList<string> tags1, IList<string> tags2)
        {
            foreach(var tag in tags2)
            {
                
            }

            return 0;
        }

    }
}
