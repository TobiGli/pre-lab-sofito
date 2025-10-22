import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Nav } from './components/nav/nav';
import { ItemListContainer } from './components/itemlistcontainer/itemlistcontainer.jsx';
import { ItemDetailContainer } from './components/itemdetailcontainer/itemdetailcontainer.jsx';
import { CartProvider } from './context/CardContext/CartProvider.jsx';

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