import React from 'react';
import {withRouter} from 'react-router-dom';
import {renderChangePercent} from '../helpers'
import { IconContext } from 'react-icons/lib';
import {MdFavoriteBorder} from 'react-icons/md'
import {handleFavorites} from '../helpers'





function Table(props) {
    const {
        handleMarketCapClick, 
        handlePriceClick, 
        handleNameClick, 
        cryptocurrencies, 
        // handleFavorites,
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
                            <th>Favorites</th>
                        </tr>
                    </thead>
                    <tbody className='Table-body'>
                        {cryptocurrencies.map((cryptocurrency) => {
                            return (
                                                           
                                <tr key={cryptocurrency.id} >
                                    <td onClick={() => history.push(`/currency/${cryptocurrency.id}`)}><span className='Table-rank'>{cryptocurrency.rank}</span>{cryptocurrency.name}</td>
                                    <td onClick={() => history.push(`/currency/${cryptocurrency.id}`)}><span className='Table-dollar'>$</span>{cryptocurrency.price}</td>
                                    <td onClick={() => history.push(`/currency/${cryptocurrency.id}`)}><span className='Table-dollar'>$</span>{cryptocurrency.marketCap}</td>
                                    <td onClick={() => history.push(`/currency/${cryptocurrency.id}`)}>{renderChangePercent(cryptocurrency.percentChange24h)}</td> 
                                    <td onClick={() => handleFavorites(cryptocurrency)} className="Favorite-icon"><MdFavoriteBorder /></td>                                
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


