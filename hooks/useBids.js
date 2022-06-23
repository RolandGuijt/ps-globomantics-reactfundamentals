import { useEffect, useState } from "react";
import apiConfig from "../helpers/apiConfig";
import loadingStates from "../helpers/loadingStates";

const useBids = (houseId) => {
  const [bids, setBids] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchBids = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch(`${apiConfig.url}/house/${houseId}/bids`);
        setBids(await rsp.json());
        setLoadingState(loadingStates.loaded);
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    };
    fetchBids();
  }, [houseId]);

  const addBid = (bid) => {
    setBids([...bids, bid]);
  };

  return { bids, loadingState, addBid };
};

export default useBids;
