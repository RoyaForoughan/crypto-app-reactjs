import { useEffect } from "react"
import { useState } from "react"
import TableCoin from "../modules/TableCoin"
import { getCoinList } from "../services/cryptoApi"


function HomePage() {
    const [coin , setCoin] = useState([])

    useEffect(() => {
      const getData = async() =>{
        const res = await fetch(getCoinList())
        const json = await res.json()
        setCoin(json)
      }
      getData()

    })
  
  return (
    <div>
        <TableCoin coin={coin}/>
    </div>
  )
}

export default HomePage