import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import OrderDetail from './pages/OrderDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/detail/:id" element={<OrderDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='404' element={<NotFound />} />
    </Route>
  </Routes>
  )
}

export default App
