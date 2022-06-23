import { useEffect, useState } from "react";
import apiConfig from "../helpers/apiConfig";
import loadingStates from "../helpers/loadingStates";

const useHouse = (id) => {
  const [house, setHouse] = useState({});
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchHouse = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch(`${apiConfig.url}/house/${id}`);
        setHouse(await rsp.json());
        setLoadingState(loadingStates.loaded);
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    };
    fetchHouse();
  }, [id]);

  return { house, loadingState };
};

export default useHouse;
