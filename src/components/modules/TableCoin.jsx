import PropTypes from 'prop-types'
import chartUp from '../../assets/chart-up.svg'
import chartDown from '../../assets/chart-down.svg'
import {RotatingLines} from 'react-loader-spinner'
import styles from './TableCoin.module.css'
import { marketChart } from '../services/cryptoApi'

function TableCoin({coins , isLoading , setChart }) {
    TableCoin.propTypes = {
        coins: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
      }; 
      
  return (
    <div className={styles.container}>
        {isLoading ?
         <RotatingLines strokeColor="#2239aa" strokeWidth="2"/> :
          <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {coins.map((coin) => 
                <TableRow coin={coin} key={coin.id}  setChart = {setChart}/>
              )} 
          </tbody>
        </table>
        }
    </div>
  )
}

export default TableCoin

const TableRow = ({coin, setChart}) =>{

  const {
    id ,
    image , 
    symbol , 
    name , 
    current_price , 
    price_change_percentage_24h : price_change , 
    total_volume} = coin

    TableRow.propTypes = {
      coin: PropTypes.object.isRequired,
    }; 

    const showHandler =async () => {
      try {
        const res = await fetch(marketChart(id))
        const json = await res.json()
        setChart({...json , coin})
      } catch (error) {
        setChart(null)
      }
    }

  return (
    <tr key={id}>
                <td>
                  <div className={styles.symbol} onClick={showHandler}>
                    <img src={image} alt="" />
                    <span>{symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td>{name}</td>
                <td> ${current_price.toLocaleString()}</td>
                <td className={price_change > 0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
                <td>{total_volume.toLocaleString()}</td>
                <td>
                  <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
                </td>
                </tr>
  )
}