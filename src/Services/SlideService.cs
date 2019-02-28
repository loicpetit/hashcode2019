using System.Collections.Generic;
using System.Linq;
using hashcode2019.src.Models;

namespace hashcode2019.src.Services
{
    public class SlideService
    {

        public List<Slide> GetCollectionSlides(List<Slide> slides)
        {
            var slidesCollection = new List<Slide>();
            var current = slides.First();
            slidesCollection.Add(current);
            Slide next;
            do
            {
                next = GetBestSlide(current, slidesCollection);
                if(next != null){
                    slidesCollection.Add(next);
                    current = next;
                }
            }
            while (next != null);
            return slidesCollection;
        }

        private Slide GetBestSlide(Slide current, List<Slide> usedSlides)
        {
            foreach(var t in current.Scores)
            {
                if(!usedSlides.Contains(t.Item1 as Slide))
                {
                    return t.Item1 as Slide;
                }
            }
            return null;
        }

        public List<Slide> GetSlides(List<Photo> photos)
        {
            var PhotosV = photos?.Where(x => !x.IsHorizontal).ToList();
            var photosAlreadyPaired = new HashSet<Photo>();
            var slides = photos?.Where(x => x.IsHorizontal)
                .Select(x => new Slide(x))
                .ToList();

            foreach (var photo in PhotosV)
            {
                if (photosAlreadyPaired.Contains(photo))
                    continue;

                for (var i = 0; i < photo?.Scores?.Count; i++)
                    if (!photosAlreadyPaired.Contains(photo?.Scores[i]?.Item1) && !(photo?.Scores[i]?.Item1 as Photo).IsHorizontal)
                    {
                        slides.Add(new Slide(photo, photo.Scores[i]?.Item1 as Photo));
                        photosAlreadyPaired?.Add(photo.Scores[i]?.Item1 as Photo);
                    }
            }

            return slides;
        }
    }
}
