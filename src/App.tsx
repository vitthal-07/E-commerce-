import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FloatingIcon from "./components/FloatingIcon";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-background text-text min-h-screen flex flex-col justify-between">
      <ToastContainer />
      <Navbar />
      <main className="flex-grow px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-[85px]">
        <SearchBar />
        <Outlet />
        <FloatingIcon />
      </main>
      <Footer />
    </div>
  );
};

export default App;
