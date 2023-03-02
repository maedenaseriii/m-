import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from '../layouts/index'
import Home from '../pages/home'
import AuthPage from '../pages/auth'
const AppRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/products/:productId" element={<ProductDetail/>} />
          <Route path="/payment" element={<AuthPage/>} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouterProvider;
