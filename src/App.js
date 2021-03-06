import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import ProductProvider from './context/ProductProvider.jsx';
import OrderReview from './pages/OrderReview/OrderReview';
import Payment from './pages/Payment/Payment.jsx';
import Shop from './pages/Shop/Shop';
import Login from './pages/UserAuth/Login/Login.jsx';
import Register from './pages/UserAuth/Register/Register.jsx';
import ViewProduct from './pages/ViewProduct/ViewProduct.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Logo></Logo>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Shop />} />

              <Route path="order" element={<OrderReview />} />
              <Route
                path="payment"
                element={
                  <PrivateRoute>
                    <Payment />
                  </PrivateRoute>
                }
              />
              <Route
                path="view/:id"
                element={
                  <PrivateRoute>
                    <ViewProduct />
                  </PrivateRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
