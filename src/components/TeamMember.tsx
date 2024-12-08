import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type TeamMemberProps = {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
};
const TeamMember = ({
  facebook,
  id,
  image,
  instagram,
  linkedin,
  name,
  role,
  twitter,
}: TeamMemberProps) => {
  return (
    <Card id={`${id}`} className="w-full mx-auto rounded-lg">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-fit object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardTitle className="px-4 py-2 text-lg font-semibold text-text bg-primary">
        {name}
      </CardTitle>
      <CardDescription className="bg-primary text-text px-4">
        {role}
      </CardDescription>
      <CardFooter className="flex items-center justify-between bg-primary text-text rounded-b-lg pt-2">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-blue-600" />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl text-blue-400" />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-pink-600" />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl text-blue-800" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default TeamMember;
