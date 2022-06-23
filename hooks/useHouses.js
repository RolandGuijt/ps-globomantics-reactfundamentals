import { useState, useEffect } from "react";
import loadingStates from "../helpers/loadingStates";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch("./houses.json");
        setHouses(await rsp.json());
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoadingState(loadingStates.loaded);
    };
    fetchHouses();
  }, []);

  return { houses, loadingState };
};

export default useHouses;
