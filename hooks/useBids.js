import { useEffect, useState } from "react";
import loadingStates from "../helpers/loadingStates";

const useBids = (houseId) => {
  const [bids, setBids] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStates.isLoading);

  useEffect(() => {
    const fetchBids = async () => {
      setLoadingState(loadingStates.isLoading);
      try {
        const rsp = await fetch(`/api/bids/${houseId}`);
        setBids(await rsp.json());
        setLoadingState(loadingStates.loaded);
      } catch {
        setLoadingState(loadingStates.hasErrored);
      }
    };
    fetchBids();
  }, [houseId]);

  const addBid = (bid) => {
    setBids([...bids, bid]);
  };

  return { bids, loadingState, addBid };
};

export default useBids;
