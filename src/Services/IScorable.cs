using System;
using System.Collections.Generic;
using System.Text;

namespace hashcode2019.src.Services
{
    public interface IScorable
    {
        /// <summary>
        /// Tags
        /// </summary>
        IList<string> Tags { get; set; }
        /// <summary>
        /// Score with other
        /// </summary>
        IList<Tuple<IScorable, int>> Scores { get; set; }
    }
}
