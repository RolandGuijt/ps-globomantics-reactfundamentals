import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import navValues from "../navValues";
import React, { useState } from "react";
import HouseList from ".";
import House from "./house";

const NavigationContext = React.createContext();

const getComponent = (navCurrent) => {
  switch (navCurrent) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    default:
      return <h3>No component for navigation value {navCurrent} found</h3>;
  }
};

function MyApp() {
  const [nav, setNav] = useState({ current: navValues.home, param: undefined });
  const navigate = (navTo, param) => {
    setNav({ current: navTo, param: param });
  };
  return (
    <div className="container">
      <NavigationContext.Provider value={{ navState: nav, navigate }}>
        <Header subtitle="Providing houses all over the world" />
        {getComponent(nav.current)}
      </NavigationContext.Provider>
    </div>
  );
}

export { NavigationContext };
export default MyApp;
