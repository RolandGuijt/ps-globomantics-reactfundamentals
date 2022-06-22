import useHouses from "../hooks/useHouses";
import currencyFormatter from "../helpers/currencyFormatter";
import { useContext } from "react";
import { NavigationContext } from "./navigation";
import navValues from "../navValues";

const HouseList = () => {
  const houses = useHouses();
  const { navigate } = useContext(NavigationContext);

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
          {houses.map((h) => (
            <tr key={h.id} onClick={() => navigate(navValues.house, h.id)}>
              <td>{h.address}</td>
              <td>{h.country}</td>
              <td>{currencyFormatter.format(h.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HouseList;
