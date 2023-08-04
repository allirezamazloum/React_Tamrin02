import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Movies from "./components/Movies";
import './styles/style.css';
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <ul className='nav'>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Movies">Movies</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
        </ul>
        
      </div>
      <hr/>
      <div>
        
      </div>
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Movies" element={<Movies/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
