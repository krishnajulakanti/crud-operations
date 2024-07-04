import { useContext, useEffect, useState } from "react"
import GadgetCard from './GadgetCard'
import { ProductContext } from '../App'

function GadgetShowCase() {

  const { gadgets} = useContext(ProductContext);

  return (
    <div>
      <h2>List of Gadgets</h2>
      <GadgetCard gadgets={gadgets}/>
    </div>
  )
}

export default GadgetShowCase