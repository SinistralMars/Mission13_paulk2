using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Mission13_paulk2API.Data
{
    public class JoelHiltonMovieCollectionContext : DbContext
    {
        public JoelHiltonMovieCollectionContext (DbContextOptions<JoelHiltonMovieCollectionContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
