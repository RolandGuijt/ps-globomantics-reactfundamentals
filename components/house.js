import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import loadingStates from "../helpers/loadingStates";
import useHouse from "../hooks/useHouse";
import { NavigationContext } from "./app";
import Bids from "./bids";
import LoadingIndicator from "./loadingIndicator";

const House = () => {
  const { navState } = useContext(NavigationContext);
  const { house, loadingState } = useHouse(navState.param);

  if (loadingState !== loadingStates.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  if (!house) return <div>House with id {navState.param} not found</div>;
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            className="img-fluid"
            src={
              house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
        <Bids house={house} />
      </div>
    </div>
  );
};

export default House;
