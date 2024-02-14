import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/shop'
import ShopCategory from './Pages/shopCategory'
import Product from './Pages/product';
import Cart from './Pages/cart'
import LoginSignup from './Pages/loginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men-banner.png'
import women_banner from './Components/Assets/womens-banner.jpg'
import kids_banner from './Components/Assets/kids-banner.jpg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path='/womans' element={<ShopCategory banner={women_banner} category="womans" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner  } category="kids" />} />
          <Route path='/products' element={<Product />} />
          <Route path=':productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
