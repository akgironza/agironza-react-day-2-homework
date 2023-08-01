import './App.css';
import Movie from './components/Movie'
import Movies from './components/Movies'

  const movies = [
    {
      name: "The Matrix",
      year: "1999",
      rating: "R",
      image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "13 Going on 30",
      year: "2004",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BMTkzOGVmN2EtMjI0ZS00NjMxLThmNmUtZDg3ZjAyNzdlODg0XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg"

    },
    {
      name: "Only Lovers Left Alive",
      year: "2013",
      rating: "R",
      image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2021/12/20123958/kffoWJ7FfPRlFFBGixOMbq3blQp-scaled.jpg"

    },
    {
      name: "Fire of Love",
      year: "2022",
      rating: "PG",
      image: "https://m.media-amazon.com/images/M/MV5BOTMwNjMxOWQtYTEyOC00OTUyLTlhMTItOGFkOTJkMWM1NDQ5XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg"

    },
    {
      name: "Inside Out",
      year: "2015",
      rating: "PG",
      image: "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg"

    },
  ]

const App = (props) => {
  // const movieRendering = movies.map(movies => (
  //   <Movie />
  // ));

  // <ObjectComponent key={object.id} object={object} />

  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

//Grab the movies array from props and 
//use the Array Map method to look over the array and 
// render a Movie (not Movies) component for each movie.
//Using devtools, confirm that your component structure looks like so.

export default App;
