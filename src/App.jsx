import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav.jsx';
import { ItemListContainer } from './components/Itemlistcontainer/Itemlistcontainer.jsx';
import { ItemDetailContainer } from './components/Itemdetailcontainer/Itemdetailcontainer.jsx';
import { CartProvider } from './context/CartContext/CartProvider.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/detail/:id" element={ItemDetailContainer}/>
          </ Routes>
      </CartProvider>
    </BrowserRouter>
  )
} 

export default App;