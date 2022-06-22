import logo from "./GloboLogo.png";
import Image from "next/Image";
import { useContext } from "react";
import { NavigationContext } from "../pages/_app";
import navValues from "../navValues";

const Header = ({ subtitle }) => {
  const { navigate } = useContext(NavigationContext);
  return (
    <header className="row mb-4">
      <div className="col-5">
        <Image
          src={logo}
          className="logo"
          alt="logo"
          onClick={() => navigate(navValues.home)}
        />
      </div>
      <div className="col-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
