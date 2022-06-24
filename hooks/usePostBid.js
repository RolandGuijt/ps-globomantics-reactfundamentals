import apiConfig from "../helpers/apiConfig";

const usePostBid = () => {
  return {
    post: (bid) => {
      const postBid = async () => {
        await fetch(`${apiConfig.url}/house/${bid.houseId}/bids`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bid),
        });
      };
      postBid();
    },
  };
};

export default usePostBid;
