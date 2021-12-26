import './App.scss';
import { Route} from "react-router-dom";
import { DashProvider } from './DashContext'
import Home from '././components/Home/Home.js';
import LandingPage from './components/LandingPage/LandingPage';
import Header from './components/Header/Header.js'

function App() {
  return (
        <DashProvider>
          <Header />
            {/* <Route path="/home" component={Home} /> */}
            {/* <Route path="/" exact component={Home} /> */}
            <Home />
            
        </DashProvider>
  );
}

export default App;
