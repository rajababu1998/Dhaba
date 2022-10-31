import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Header from './component/shared/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage'
import List from './component/List/List';
import Restaurant from './component/Restaurant/Restaurant';
import AddRestaurant from './component/Restaurant/AddRestaurant';
import Registration from './component/User/Registration';
import Footer from './component/shared/Footer';
import Login from './component/User/Login';
import Cart from './component/User/Cart';
import AddMenu from './component/Restaurant/AddMenu';
import Order from './component/User/Order';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/list/:city' element = {<List/>} />
        <Route path='/restaurant/:id' element = {<Restaurant/>} />
        <Route path='/signup/' element = {<Registration/>} />
        <Route path='/login/' element = {<Login/>} />
        <Route path='/cart/' element = {<Cart/>} />
        <Route path='/order/' element = {<Order/>} />
        <Route path='/addrestaurant/' element = {<AddRestaurant/>} />
        <Route path='/addmenu/' element = {<AddMenu/>} />
        <Route path='/' element = {<Homepage/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
