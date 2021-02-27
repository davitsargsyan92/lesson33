import React from 'react'
import '../list/table.css'
import Loading from  './common/loading'
import { renderChangePercent } from '../helpers'
import {MdFavoriteBorder} from 'react-icons/md'
import {handleFavorites} from '../helpers'





function Favorites () {

   const storedItems = JSON.parse(localStorage.getItem('favorites'))
   
   return (

      

      <div className='Table-container'>
          <table className='Table'> 
              <thead className='Table-head'>
                  <tr>
                      <th >Cryptocurrrency</th>
                      <th >Price</th>
                      <th >Market Cap</th>
                      <th>Percent Change 24h</th>
                      <th>Favorites</th>
                  </tr>
              </thead>
              <tbody className='Table-body'>
                  {storedItems.map((cryptocurrency) => {
                      return (
                          <>                                
                          <tr key={cryptocurrency.id} >
                              <td><span className='Table-rank'>{cryptocurrency.rank}</span>{cryptocurrency.name}</td>
                              <td><span className='Table-dollar'>$</span>{cryptocurrency.price}</td>
                              <td><span className='Table-dollar'>$</span>{cryptocurrency.marketCap}</td>
                              <td>{renderChangePercent(cryptocurrency.percentChange24h)}</td> 
                              <td onClick={handleFavorites(cryptocurrency)} className="Favorite-icon"><MdFavoriteBorder /></td>                                
                          </tr>                                
                          </>
                      )
                  })}
              </tbody>
          </table>
      </div>
  )
}









const storedItems = JSON.parse(localStorage.getItem('favorites'))

export default Favorites