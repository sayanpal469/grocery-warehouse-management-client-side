import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomeSection/Home/Home';
import Login from './components/LoginArea/Login/Login';
import Register from './components/LoginArea/Register/Register';
import ItemDetail from './components/HomeSection/ItemDetail/ItemDetail';
import AddItem from './components/PrivateSection/AddItem/AddItem';
import RequireAuth from './components/LoginArea/RequireAuth/RequireAuth';
import ManageItems from './components/PrivateSection/ManageItem/ManageItems';
import Footer from './components/Footer/Footer';
import MyItems from './components/PrivateSection/MyItems/MyItems';
import Chat from './components/Chat/Chat';
import { ToastContainer } from 'react-toastify';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';

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
       <Route path='/add' element={ <RequireAuth>
        <AddItem/>
       </RequireAuth> }></Route>
       <Route path='/myItem' element={ <RequireAuth>
        <MyItems/>
       </RequireAuth> }></Route>
       <Route path='/blog' element={ <Blog/> }></Route>
       <Route path='/login' element={ <Login/> }></Route>
       <Route path='/register' element={ <Register/> }></Route>
       <Route path='*' element={ <NotFound/> }></Route>
     </Routes>
     <ToastContainer/>
     <Chat/>
     <Footer/>
    </div>
  );
}

export default App;
