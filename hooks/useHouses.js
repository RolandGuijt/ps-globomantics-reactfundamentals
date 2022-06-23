import { useState, useEffect } from "react";
import apiConfig from "../helpers/apiConfig";
import loadingStates from "../helpers/loadingStates";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch(`${apiConfig.url}/houses`);
        setHouses(await rsp.json());
        setLoadingState(loadingStates.loaded);
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    };
    fetchHouses();
  }, []);

  return { houses, loadingState };
};

export default useHouses;
