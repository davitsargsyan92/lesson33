import React from 'react';
import { onFavoriteClickCB } from '../../helpers';
import Table from '../list/Table'

class Favorites extends React.Component{
   constructor(){
      super();
      this.state = {
         favorites : JSON.parse(localStorage.getItem("favorites")) || []
      }
   }

   handleFavoriteClick = (event , currency) => {
      event.stopPropagation();

      this.setState(prevState => onFavoriteClickCB(prevState , currency))
      
  }

   render(){

      const {favorites} = this.state;

      const favoriteIDs = favorites.map(item => item.id);
      const currencies = favorites.map((item , index) => ({...item , rank : index + 1}));

      if(currencies.length === 0){
         return <div>Empty Favorites</div>
      }
      return (
         <div>
            <Table currencies={currencies} favorites={favoriteIDs} onFavoriteClick={this.handleFavoriteClick}/>
         </div>
      )
   }
}

export default Favorites