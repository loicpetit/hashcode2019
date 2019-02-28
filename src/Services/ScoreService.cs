using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace hashcode2019.src.Services
{
    /// <summary>
    /// Sorry graph was too long
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ScoreService<T> where T : IScorable, new()
    {
        public void Arrange(IEnumerable<T> items)
        {
            var itemsList = items?.ToList();
            foreach(var item in itemsList)
            {
                Compute(item, itemsList);
                item?.Scores?.OrderByDescending(x => x.Item2);
            }
        }       

        private void Compute(T item, List<T> items)
        {   
            foreach(var it in items)
            {
                if (it.Equals(item))
                    continue;
                var score = Compute(item, it);

                item?.Scores?.Add(new Tuple<IScorable, int>(it, score));
            }
        }

        private int Compute(T item1, T item2)
        {
            var scoreA = CommonTag(item1?.Tags, item2?.Tags);
            var scoreB = NotCommonTag(item1?.Tags, item2?.Tags);
            var scoreC = NotCommonTag(item2?.Tags, item1?.Tags);


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

        private int NotCommonTag(IList<string> tags1, IList<string> tags2)
        {
            var notCommon = 0;
            foreach (var tag in tags1)
            {
                notCommon += !tags2.Contains(tag) ? 1 : 0;
            }

            return 0;
        }

    }
}
