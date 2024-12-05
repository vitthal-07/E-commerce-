import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
