import React from 'react'
import '../list/table.css'
import Loading from  './common/loading'
import { renderChangePercent } from '../helpers'
import {MdFavoriteBorder} from 'react-icons/md'


class Favorites extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            favorites: []
        }

        
        
    }

    componentDidMount() {
        const storedItems = JSON.parse(localStorage.getItem('favorites'))

        this.setState({
            favorites: this.state.favorites.push(storedItems),
            loading: false
        })
        // console.log(this.state.favorites)
    }

    // handleFavoriteItems() {
    //     const storedItems = localStorage.getItem('id')
        
    //     console.log(pending,'pending')
    // }
    

    render(){
        const {loading,favorites} = this.state
        if(loading){
            return(
                <div><Loading /></div>
            )
        }
        // console.log('favorites[0].name')
        // const {favorites} = this.state
        return (

            <div>
                
            </div>

            // <div className='Table-container'>
            //     <table className='Table'> 
            //         <thead className='Table-head'>
            //             <tr>
            //                 <th >Cryptocurrrency</th>
            //                 <th >Price</th>
            //                 <th >Market Cap</th>
            //                 <th>Percent Change 24h</th>
            //                 <th>Favorites</th>
            //             </tr>
            //         </thead>
            //         <tbody className='Table-body'>
            //             {favorites.map((cryptocurrency) => {
            //                 return (
            //                     <>                                
            //                     <tr key={cryptocurrency.id} >
            //                         <td><span className='Table-rank'>{cryptocurrency.rank}</span>{cryptocurrency.name}</td>
            //                         <td><span className='Table-dollar'>$</span>{cryptocurrency.price}</td>
            //                         <td><span className='Table-dollar'>$</span>{cryptocurrency.marketCap}</td>
            //                         <td>{renderChangePercent(cryptocurrency.percentChange24h)}</td> 
            //                         <td className="Favorite-icon"><MdFavoriteBorder /></td>                                
            //                     </tr>                                
            //                     </>
            //                 )
            //             })}
            //         </tbody>
            //     </table>
            // </div>
        )
    }




    
   
}



export default Favorites