import './App.css';
import {Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
import CreateVideogame from './Components/CreateVideogame/CreateVideogame';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/home/game/:id' component={Details} />
      <Route exact path='/home/create' component={CreateVideogame} />
    </div>
  );
}

export default App;
