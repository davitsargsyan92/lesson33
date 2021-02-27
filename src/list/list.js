import React from 'react';
import './table.css';
import Loading from '../components/common/loading'
import Table from './table'
import Pagination from './pagination'


class List extends React.Component{
    constructor(props){
        // console.log(props)
        const queryObject = new URLSearchParams(props.location.search)
        super()
        this.state = {
            cryptocurrencies: [],
            loading: false,
            page: +queryObject.get('page') || 1,
            totalPages: 0,
            perPage: 10,
            error: null,
            favorites: []
        }
    }

    fetchCurrencies(){
        this.setState({
            loading: true,
        });
        const {page} = this.state
        const {perPage} = this.state
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=${page}&perPage=${perPage}`)
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(data => {
                
                console.log(data,'data')
                this.setState({
                    loading: false,
                    cryptocurrencies: data.currencies,
                    totalPages: data.totalPages
                })
            })
            .catch(error => {
                // console.dir(error, "error")
                this.setState({
                    error: true,
                    loading: false,
                    cryptocurrencies: []
                })
        })
     
    }

    // handleFavorites = (currency) => {
    //     let favList = JSON.parse(localStorage.getItem('favorites'))
    //     if(favList){
    //         const isFavlistIncludeCurrentCurrency = favList.some((item) => item.id === currency.id)
    //         if(isFavlistIncludeCurrentCurrency){
    //             const filteredItems = favList.filter((item) => item.id !== currency.id)
    //             localStorage.setItem('favorites', JSON.stringify(filteredItems))
    //         }else{
    //             favList.push(currency)
    //             localStorage.setItem('favorites', JSON.stringify(favList))
    //         }
    //     }else{
    //         const favList = [currency]
    //         localStorage.setItem('favorites', JSON.stringify(favList))
    //     }
        

    // }
   
    // handleFavorites = (id) => {   
    //     let favorites = this.state.favorites 
    //      this.setState({
    //             favorites: [...favorites,id]
    //         })            
     
        
    //     console.log(favorites)
        
    // }


    handlePaginationClick = (direction) => {
        let currentPage = this.state.page;
        console.log(currentPage)
        currentPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        this.setState({
            page: currentPage,
        }, this.fetchCurrencies);   // when we want THE FETCH TO WORK AFTER SETSTATE
        this.props.history.push(`?page=${currentPage}`)
    }
     
    handlePerPageChange = (pageSize) => {
        this.setState({
            perPage: pageSize
        },this.fetchCurrencies)
    }


    // handlePaginationClickDecrease = () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     }, 
    //     this.fetchCurrencies);
    // }

    componentDidMount(){
        this.fetchCurrencies()


    //     this.setState({
    //         loading: true,
    //     });

    //     fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
    //     .then(response => response.ok ? response.json() : Promise.reject
    //         // return response.ok ? response.json() : Promise.reject

    //         // if(response.ok){
    //         //     return response.json()
    //         // }
    //         //     return Promise.reject()
    //     // }
    //     )
    //     .then(data => {
            
    //         // console.log(data)
    //         this.setState({
    //             loading: false,
    //             cryptocurrencies: data.currencies,
    //         })
    //     })
        
    }

    // renderChangePercent(percent){
    //     if(percent > 0){
    //         return (
    //             <span className='percent-raised'>
    //                 {percent} % &uarr;
    //             </span>
    //         )
    //     }else if(percent < 0){
    //         return (
    //             <span className='percent-fallen'>
    //                 {percent} % &darr;
    //             </span>
    //         )
    //     }
    //     return (
    //         <span>
    //             {percent};
    //         </span>
    //     )
    // }
    
    handlePriceClick = () => {
        const cryptocurrencies = [...this.state.cryptocurrencies]
          
        cryptocurrencies.sort((a, b) => {
            return a.price.split(',').join('') - b.price.split(',').join('');
        } )
        // console.log(cryptocurrencies)

        this.setState({
            cryptocurrencies: cryptocurrencies,
        })
    }

    handleMarketCapClick = () => {
        const cryptocurrencies = [...this.state.cryptocurrencies]
          
        cryptocurrencies.sort((a, b) => {
            return a.marketCap.split(',').join('') - b.marketCap.split(',').join('');
        } )
        // console.log(cryptocurrencies)

        this.setState({
            cryptocurrencies: cryptocurrencies,
        })
    }

    handleNameClick = () => {
        const cryptocurrencies = [...this.state.cryptocurrencies]
        cryptocurrencies.sort((a, b) => { 
            console.log(a.name)
            if (a.name > b.name){
                return 1
            }else if(a.name < b.name){
                return -1
            }else{
                return 0
            }
        }
    )
        this.setState({
            cryptocurrencies: cryptocurrencies
        })
}

    componentWillUnmount(){
        console.log(localStorage.getItem('favorites'))
    }

    render(){
        const {loading, cryptocurrencies, page, totalPages, perPage, error} = this.state
        if(loading){ // (this.state.loading)
        return(
            <div className='loading-container'>
                <Loading />
            </div>
            )
        }
        if(error) {
            return (
                <div>
                    <h1>ERRor</h1>
                </div>
            )
        }
        // console.log(cryptocurrencies, 'list')
        return(
            //React.Fragment
            <> 
                <Table 
                    handlePriceClick={this.handlePriceClick}
                    handleMarketCapClick={this.handleMarketCapClick}
                    handleNameClick={this.handleNameClick}
                    // renderChangePercent={this.renderChangePercent}
                    cryptocurrencies={cryptocurrencies}
                    // handleFavorites = {this.handleFavorites}
                />
                <Pagination 
                    handlePaginationClick = {this.handlePaginationClick} 
                    page = {page}
                    totalPages = {totalPages}
                    perPage= {perPage}
                    handlePerPageChange = {this.handlePerPageChange}
                    currentPerPage = {this.state.perPage}

                />
             </>
        )
    }

}

export default List;