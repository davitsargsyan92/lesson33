import React from 'react';
import {withRouter} from 'react-router-dom';
import {renderChangePercent} from '../helpers'


function Table(props) {
    const {
        handleMarketCapClick, 
        handlePriceClick, 
        handleNameClick, 
        cryptocurrencies, 
        // renderChangePercent, 
        history
    } = props //ES6 destructuring

    return(
            <div className='Table-container'>
                <table className='Table'> 
                    <thead className='Table-head'>
                        <tr>
                            <th onClick={handleNameClick}>Cryptocurrrency</th>
                            <th onClick={handlePriceClick}>Price</th>
                            <th onClick={handleMarketCapClick}>Market Cap</th>
                            <th>Percent Change 24h</th>
                        </tr>
                    </thead>
                    <tbody className='Table-body'>
                        {cryptocurrencies.map((cryptocurrency) => {
                            return (
                                <tr key={cryptocurrency.id} onClick={() => history.push(`/currency/${cryptocurrency.id}`)}>
                                    <td><span className='Table-rank'>{cryptocurrency.rank}</span>{cryptocurrency.name}</td>
                                    <td><span className='Table-dollar'>$</span>{cryptocurrency.price}</td>
                                    <td><span className='Table-dollar'>$</span>{cryptocurrency.marketCap}</td>
                                    <td>{renderChangePercent(cryptocurrency.percentChange24h)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    )
}

export default withRouter(Table);
// export default Table;


