import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
            className="img-fluid rounded-circle"
          />
          <h1 className="mt-4 mb-3">Welcome to Joel Hilton's website!</h1>
          <p>
            This site is dedicated to Joel Hilton's love of movies and podcasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
