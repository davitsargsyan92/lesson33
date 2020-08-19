import React from 'react';
import './table.css';
import Loading from '../components/common/loading'
import Table from './table'
import Pagination from './pagination'

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            cryptocurrencies: [],
            loading: false,
            page: 1,
            totalPages: 0
        }
    }

    fetchCurrencies(){
        this.setState({
            loading: true,
        });
        const {page} = this.state
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=${page}&perPage=20`)
        .then(response => response.ok ? response.json() : Promise.reject)
        .then(data => {
            
            // console.log(data)
            this.setState({
                loading: false,
                cryptocurrencies: data.currencies,
                totalPages: data.totalPages
            })
        })
     
    }

    handlePaginationClick = (direction) => {
        let currentPage = this.state.page;
        currentPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        this.setState({
            page: currentPage,
        }, this.fetchCurrencies);   // when we want THE FETCH TO WORK AFTER SETSTATE
        
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

    render(){
        const {loading, cryptocurrencies, page, totalPages} = this.state
        console.log(this.state)
        if(loading){ // (this.state.loading)
        return(
            <div className='loading-container'>
                <Loading />
            </div>
            )
        }
        return(
            //React.Fragment
            <> 
                <Table 
                    handlePriceClick={this.handlePriceClick}
                    handleMarketCapClick={this.handleMarketCapClick}
                    handleNameClick={this.handleNameClick}
                    // renderChangePercent={this.renderChangePercent}
                    cryptocurrencies={cryptocurrencies}
                />
                <Pagination 
                    handlePaginationClick = {this.handlePaginationClick} 
                    page = {page}
                    totalPages = {totalPages}
                

                />
             </>
        )
    }

}

export default List;