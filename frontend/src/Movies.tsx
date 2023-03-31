import data from './MovieDataSample.json';
import info from './MovieData.json';

const MovieDataSample = data.MovieDataSample;
const MovieData = info.MovieData;

function MovieList() {
  return (
    <>
      <div className="bg-light p-3 mb-3">
        <h3>Movies</h3>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MovieData.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
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
