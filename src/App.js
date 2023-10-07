
import './App.css';
import AboutPage from './Components/about';
import HeroPage from './Components/hero';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
<Navbar></Navbar>
<HeroPage></HeroPage>
<AboutPage></AboutPage>
    </div>
  );
}

export default App;
