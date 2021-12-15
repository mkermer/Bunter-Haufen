import './App.scss';
import Home from '././components/Home/Home.js';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        {/* <LandingPage/> */}
      </header>
    </div>
  );
}

export default App;
