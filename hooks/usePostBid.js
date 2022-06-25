const usePostBid = () => {
  return {
    post: (bid) => {
      const postBid = async () => {
        await fetch(`/api/bids/${bid.houseId}`, {
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
