import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Toaster } from "react-hot-toast";
import SuspenseFallback from "../components/SuspenseFallback";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
        <CategoriesBar />
      </header>
      <main>
        <Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Modal />
      <Toaster position="bottom-right" />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
