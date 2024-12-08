import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const FloatingIcon = () => {
  const { phoneNumber } = useContext(ShopContext);

  return (
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
  );
};

export default FloatingIcon;
