import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const handleOnChange = (value: string) => {
    setSearch(value);
    navigate("/collection");
  };
  return (
    showSearch && (
      <div className="text-center">
        <div className="inline-flex items-center justify-center border-secondary w-3/4 sm:w-full mt-2 gap-3 text-center bg-primary">
          <input
            type="text"
            placeholder="Search"
            className="px-5 py-2 flex-1 outline-none bg-inherit text-sm bg-primary text-text"
            value={search}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <div className="flex gap-4 bg-secondary px-4 py-2 rounded-l-full">
            <FaSearch className="w-6 h-6 cursor-pointer" />
            <RxCross1
              onClick={() => {
                setShowSearch(false);
                setSearch("");
              }}
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default SearchBar;
