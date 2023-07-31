
import './App.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Listarticles from './component/articles/Listarticles';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from './component/articles/Cart';
import NavScroll from './component/NavScroll';
import StripePayment from './component/articles/StripePayment';
import CheckoutSuccess from './component/articles/CheckoutSuccess';
import PdfCart from './component/articles/PdfCart';
function App() {
  return (
    <div className="App">
    <Router>
      <NavScroll/>
      <Routes>
      <Route path="/pdfcart" element={<PdfCart/>}/>
      <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
      <Route path="/ckeckout" element={<CheckoutSuccess/>}/>
      <Route path='/articles' element={<Listarticles/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pay/:total' element={<StripePayment/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
