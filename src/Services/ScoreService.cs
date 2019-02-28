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
            return 0;
        }

    }
}
