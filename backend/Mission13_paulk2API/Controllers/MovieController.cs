using Microsoft.AspNetCore.Mvc;
using Mission13_paulk2API.Data;

namespace Mission13_paulk2API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {

        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        } 

        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
