import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Banner from './components/HomeSection/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomeSection/Home/Home';

function App() {
  return (
    <div classNameName="App">
     <Nav/>
     <Routes>
       <Route path='/' element={ <Home/> }></Route>
       <Route path='/home' element={ <Home/> }></Route>
     </Routes>
    </div>
  );
}

export default App;
