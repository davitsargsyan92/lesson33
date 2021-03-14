import React from "react";

export const handleResponse = response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject(response)
};

export const renderChangePercent = (percent) => {
    if(percent > 0){
        return <span className="percent-raised"> {percent} % &uarr;</span>
    }
    else if(percent < 0){
        return <span className="percent-fallen"> {percent} % &darr;</span>
    }else{
        return <span>{percent}</span>
    }
};


export const onFavoriteClickCB = (prevState , currency ) => {
    if(prevState.favorites.some(item => item.id === currency.id)){
        const favorites = [...prevState.favorites];
        const filteredFavorites = favorites.filter(item => item.id !== currency.id);

        localStorage.setItem('favorites' , JSON.stringify(filteredFavorites))
        return {
            ...prevState,
            favorites: filteredFavorites
        }
    }

    else{

        const currentFavorites = [...prevState.favorites , currency]
        localStorage.setItem('favorites' , JSON.stringify(currentFavorites))

        return {
            ...prevState,
            favorites: currentFavorites
        }
    }
 
}