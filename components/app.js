import { useContext } from "react";
import Header from "../components/header";
import Navigation, {
  getComponent,
  NavigationContext,
} from "../components/navigation";

const App = () => {
  const { navState } = useContext(NavigationContext);
  return (
    <Navigation>
      <Header subtitle="Providing houses all over the world" />
      {getComponent(navState.current)}
    </Navigation>
  );
};

export default App;
