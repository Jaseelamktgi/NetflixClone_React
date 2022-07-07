import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import './Component/Navbar/Navbar.css'
import './Component/Banner/Banner.css'
import RowPost from './Component/RowPost/RowPost';
import './Component/RowPost/RowPost.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
