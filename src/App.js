
import './App.css';
import AboutPage from './Components/about';
import HeroPage from './Components/hero';
import Navbar from './Components/navbar';
import PricePage from './Components/price';

function App() {
  return (
    <div className="App">
<Navbar></Navbar>
<HeroPage></HeroPage>
<AboutPage></AboutPage>
<PricePage></PricePage>
    </div>
  );
}

export default App;
