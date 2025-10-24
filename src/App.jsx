import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav'; 
import { ItemListContainer } from './components/itemlistcontainer/itemlistcontainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;