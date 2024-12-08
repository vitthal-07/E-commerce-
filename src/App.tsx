import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card";
import { ShopContext } from "./context/ShopContext";

const App = () => {
  const location = useLocation();
  const { phoneNumber } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-background text-text min-h-screen flex flex-col justify-between">
      <ToastContainer />
      <Navbar />
      <main className="flex-grow px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-[100px]">
        <Outlet />
        <a
          className="fixed right-12 bottom-12 bg-primary rounded-full p-1.5"
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HoverCard>
            <HoverCardTrigger>
              <FaWhatsapp className=" text-green-600 text-3xl" />
            </HoverCardTrigger>
            <HoverCardContent className=" bg-primary">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <h2 className="text-md font-medium text-text">
                  Click to contact us
                </h2>
              </div>
            </HoverCardContent>
          </HoverCard>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default App;
