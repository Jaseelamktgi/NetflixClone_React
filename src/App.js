import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import RowPost from './Component/RowPost/RowPost';
import {
  actions, originals, comedyMovies,mystery,adventure,animation,fantasy,scienceFiction,
  romanceMovies, documentaries, horrorMovies,
}
  from './urls'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={adventure} title="Adventure" isSmall />
      <RowPost url={animation} title="Animation" isSmall />
      <RowPost url={fantasy} title="Fantasy" isSmall />
      <RowPost url={scienceFiction} title="Science Fiction" isSmall />
      <RowPost url={actions} title="Action Thrillers" isSmall />
      <RowPost url={comedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={horrorMovies} title="Horror Movies" isSmall />
      <RowPost url={romanceMovies} title="Romance Movie" isSmall />
      <RowPost url={mystery} title="Mystery" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />


    </div>
  );
}

export default App;
