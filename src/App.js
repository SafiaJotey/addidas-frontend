import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import ProductProvider from './context/ProductProvider.jsx';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import OrderReview from './pages/OrderReview/OrderReview';
import Shop from './pages/Shop/Shop';
import Login from './pages/UserAuth/Login/Login.jsx';
import Register from './pages/UserAuth/Register/Register.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route
                path="order"
                element={
                  <PrivateRoute>
                    <OrderReview />
                  </PrivateRoute>
                }
              />
              <Route path="manage" element={<ManageInventory />} />
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
