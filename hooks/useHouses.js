import { useState, useEffect } from "react";
import loadingStates from "../helpers/loadingStates";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch(`/api/houses`);
        setHouses(await rsp.json());
        setLoadingState(loadingStates.loaded);
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
    };
    fetchHouses();
  }, []);

  return { houses, loadingState };
};

export default useHouses;
