import { useEffect, useState } from "react";
import loadingStates from "../helpers/loadingStates";

const useHouse = (id) => {
  const [house, setHouse] = useState();
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchHouse = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch(`/api/houses/${id}`);
        setHouse(await rsp.json());
        setLoadingState(loadingStates.loaded);
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
    };
    fetchHouse();
  }, [id]);

  return { house, loadingState };
};

export default useHouse;
