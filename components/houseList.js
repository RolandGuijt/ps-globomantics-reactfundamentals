import useHouses from "../hooks/useHouses";
import loadingStates from "../helpers/loadingStates";
import LoadingIndicator from "./loadingIndicator";
import HouseRow from "./houseRow";

const HouseList = () => {
  const { houses, loadingState } = useHouses();

  if (loadingState !== loadingStates.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(house => <HouseRow key={house.id} {...house}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default HouseList;
