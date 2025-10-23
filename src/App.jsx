import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav'; // Asegúrate que esta importación sea correcta
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />}/> {/* <-- CORRECCIÓN 2 */}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;