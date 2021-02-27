import React from 'react';



export const renderChangePercent = percent => {
    if(percent > 0){
        return (
            <span className='percent-raised'>
                {percent} % &uarr;
            </span>
        )
    }else if(percent < 0){
        return (
            <span className='percent-fallen'>
                {percent} % &darr;
            </span>
        )
    }
    return (
        <span>
            {percent};
        </span>
    )
}


export const handleFavorites = (currency) => {
    let favList = JSON.parse(localStorage.getItem('favorites'))
    if(favList){
        const isFavlistIncludeCurrentCurrency = favList.some((item) => item.id === currency.id)
        if(isFavlistIncludeCurrentCurrency){
            const filteredItems = favList.filter((item) => item.id !== currency.id)
            localStorage.setItem('favorites', JSON.stringify(filteredItems))
        }else{
            favList.push(currency)
            localStorage.setItem('favorites', JSON.stringify(favList))
        }
    }else{
        const favList = [currency]
        localStorage.setItem('favorites', JSON.stringify(favList))
    }
    

}
