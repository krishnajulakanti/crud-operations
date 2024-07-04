import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from '../App'

const GadgetDetails = () => {
  
  const [gadget, setGadget] = useState([]);

  const { gadgets } = useContext(ProductContext);

  const { id } = useParams()

  useEffect(() => {
    gadgets.find(res => {
      if (res.id === id) {
        setGadget(res)
      }
    })
  }, [id])

  return (
    <div>
      <h3>GadgetDetails of {gadget.id}</h3>
      {gadget.itemName}-{gadget.brandName}-{gadget.units}-{gadget.price}
    </div>
  )
}

export default GadgetDetails