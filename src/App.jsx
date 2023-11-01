import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RootLayout from "./layout/RootLayout";

const HomePage = lazy(() => import('./pages/HomePage'))

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route
            path="/products/category/:categoryName"
            element={<ProductCategoryPage />}
          />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;