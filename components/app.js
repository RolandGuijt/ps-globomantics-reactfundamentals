import Header from "../components/header";
import navValues from "../helpers/navValues";
import React, { useState } from "react";
import ComponentPicker from "./componentPicker";

const NavigationContext = React.createContext({
  navState: { current: navValues.home },
});

const App = () => {
  const [nav, setNav] = useState({
    current: navValues.home,
  });
  const navigate = (navTo, param) => setNav({ current: navTo, param });

  return (
    <NavigationContext.Provider value={{ navState: nav, navigate }}>
      <Header>Providing houses all over the world</Header>
      <ComponentPicker currentNavLocation={nav.current} />
    </NavigationContext.Provider>
  );
};

export { NavigationContext };
export default App;
