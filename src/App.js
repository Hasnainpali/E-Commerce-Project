import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import Home from './components/Home';
import ShopDetail from './components/ShopDetail';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import ContactPage from './components/ContactPage';
import Signup from './components/SignIn/Up/Signup';
import Signin from './components/SignIn/Up/Signin';

function App() {
  return (
    <div>
          <TopBar/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop-detail/:id' element={<ShopDetail/>}/>
            <Route path='/shopping-cart' element={<ShoppingCart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/contact' element={<ContactPage/>}/>          
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
          </Routes>
        
          
    </div>
  );
}

export default App;
