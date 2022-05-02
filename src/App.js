import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomeSection/Home/Home';
import Login from './components/LoginArea/Login/Login';
import Register from './components/LoginArea/Register/Register';
import ItemDetail from './components/HomeSection/ItemDetail/ItemDetail';

function App() {
  return (
    <div classNameName="App">
     <Nav/>
     <Routes>
       <Route path='/' element={ <Home/> }></Route>
       <Route path='/home' element={ <Home/> }></Route>
       <Route path='/item/:itemId' element={ <ItemDetail/> }></Route>
       <Route path='/login' element={ <Login/> }></Route>
       <Route path='/register' element={ <Register/> }></Route>
     </Routes>
    </div>
  );
}

export default App;
