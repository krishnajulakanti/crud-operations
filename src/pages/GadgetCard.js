import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from '../App'

function GadgetCard() {

  const { gadgets } = useContext(ProductContext);

  return (
    <>
      <h2>Gadget Card</h2>
      {gadgets.map((res) => (
        <li key={res.id}>
          <Link  to={`/${res.id}`}>
            {res.itemName}-{res.brandName}-{res.units}-{res.price}
          </Link>
        </li>
      ))}
    </>
  )
}

export default GadgetCard;