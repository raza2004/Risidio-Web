import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Homepage';
import Apple from './components/home/Homepage';

function App() {
  return (
    <div className="App">

<Navbar/>
<Apple/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
    </div>
  );
}

export default App;
