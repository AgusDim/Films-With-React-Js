import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Films from './components/Films';
import Disney from './components/disney';
import Anime from './components/anime';
import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavBar />
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
      <div className='films'>
        <Films />
      </div>
      <div className='disney'>
        <Disney />
      </div>
      <div className='anime'>
        <Anime />
      </div>
    </div>
  );
}

export default App;
