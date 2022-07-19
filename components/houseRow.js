import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import navValues from "../helpers/navValues";
import { NavigationContext } from "./app";

const HouseRow = ({id, address, country, price}) => {
    const { navigate } = useContext(NavigationContext);
    return (
      <tr key={id} onClick={() => navigate(navValues.house, id)}>
        <td>{address}</td>
        <td>{country}</td>
        <td>{currencyFormatter.format(price)}</td>
      </tr>
    );
}

export default HouseRow;