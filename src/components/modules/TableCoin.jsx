import PropTypes from 'prop-types'


function TableCoin({coin}) {
    TableCoin.propTypes = {
        coin: PropTypes.array.isRequired,
      }; 
      console.log(coin)
  return (
    <div>
        {/* <p>{coin}</p> */}
    </div>
  )
}

export default TableCoin