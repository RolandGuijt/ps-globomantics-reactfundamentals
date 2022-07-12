import { useContext } from "react";
import navValues from "../helpers/navValues";
import { NavigationContext } from "./app";

const Header = ({ children }) => {
  const { navigate } = useContext(NavigationContext);
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img
          src="/GloboLogo.png"
          className="logo"
          alt="logo"
          onClick={() => navigate(navValues.home)}
        />
      </div>
      {children}
    </header>
  );
};

export default Header;
