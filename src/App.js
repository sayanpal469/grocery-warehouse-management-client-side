import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomeSection/Home/Home';
import Login from './components/LoginArea/Login/Login';
import Register from './components/LoginArea/Register/Register';
import ItemDetail from './components/HomeSection/ItemDetail/ItemDetail';
import AddItem from './components/PrivateSection/AddItem/AddItem';
import MyItem from './components/PrivateSection/MyItem/MyItem';
import RequireAuth from './components/LoginArea/RequireAuth/RequireAuth';
import ManageItems from './components/PrivateSection/ManageItem/ManageItems';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div classNameName="App">
     <Nav/>
     <Routes>
       <Route path='/' element={ <Home/> }></Route>
       <Route path='/home' element={ <Home/> }></Route>
       <Route path='/item/:itemId' element={ <RequireAuth>
        <ItemDetail/>
       </RequireAuth> }></Route>
       <Route path='/manage' element={ <RequireAuth>
        <ManageItems/>
       </RequireAuth> }></Route>
       <Route path='/add' element={ <AddItem/> }></Route>
       <Route path='/myItem' element={ <MyItem/> }></Route>
       <Route path='/login' element={ <Login/> }></Route>
       <Route path='/register' element={ <Register/> }></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
