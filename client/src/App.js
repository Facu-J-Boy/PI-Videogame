import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
import CreateVideogame from './Components/CreateVideogame/CreateVideogame';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home/game/:id' element={<Details />} />
        <Route exact path='/home/create' element={<CreateVideogame />} />
      </Routes>
    </div>
  );
}

export default App;
