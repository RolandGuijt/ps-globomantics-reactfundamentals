import navValues from "../navValues";
import React, { useState } from "react";
import HouseList from "./houseList";
import House from "./house";

const NavigationContext = React.createContext({
  navState: { current: navValues.home },
  navigate: (_t, _p) => {},
});

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

function Navigation({ children }) {
  const [nav, setNav] = useState({ current: navValues.home, param: undefined });
  const navigate = (navTo, param) => setNav({ current: navTo, param });
  return (
    <NavigationContext.Provider value={{ navState: nav, navigate }}>
      {children}
      {/* {getComponent(nav.current)} */}
    </NavigationContext.Provider>
  );
}

export { NavigationContext, getComponent };
export default Navigation;
