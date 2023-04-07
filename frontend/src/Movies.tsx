import { useEffect, useState } from 'react';
import { Movie } from './types/movie';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="bg-light p-3 mb-3">
        <h3>Movies</h3>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.movieId}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function MovieCollection() {
  return (
    <>
      <div className="container">
        <h1>Joel Hilton's Movie Collection</h1>
        <MovieList />
      </div>
    </>
  );
}

export default MovieCollection;
