import Header from "../components/header";
import navValues from "../helpers/navValues";
import React, { useState } from "react";
import ComponentSelector from "./componentSelector";

const NavigationContext = React.createContext({
  navState: { current: navValues.home },
  navigate: (_t, _p) => {},
});

const App = () => {
  const [nav, setNav] = useState({
    current: navValues.home,
    param: undefined,
  });
  const navigate = (navTo, param) => setNav({ current: navTo, param });

  return (
    <NavigationContext.Provider value={{ navState: nav, navigate }}>
      <Header subtitle="Providing houses all over the world" />
      <ComponentSelector currentNavLocation={nav.current} />
    </NavigationContext.Provider>
  );
};

export { NavigationContext };
export default App;
