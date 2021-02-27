import React from 'react';
import './search.css';
import Loading from './loading';
import {withRouter} from 'react-router-dom';

class Search extends React.Component{
    constructor() {
        super()
        this.state = {
            searchResults: [],
            searchQuery: '',
            loading: false,
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const value = event.target.value;
        this.setState({
            searchQuery: value,
        });
        //!value = value === ''
        if(!value) {
            return null;
        }
            this.setState({
                loading: true,
            })
        fetch(`https://api.udilia.com/coins/v1/autocomplete?searchQuery=${value}`)
                .then(response => {
                    return response.json()
                .then(json => {
                        return response.ok ? json : Promise.reject(json);
                    });
                    })
                .then((data) => {
                    this.setState({
                        searchResults: data,
                        loading: false,
                    })
                })
    }

    // handleRedirect = (currency.id) => {
    //     this.props.history
    // }
    handleRedirect(currencyId) {
        this.props.history.push(`/currency/${currencyId}`)
        this.setState({
            searchQuery: '',
            searchResults: []
        }) 
    }

    renderSearchResults() {
        const {searchQuery, searchResults} = this.state
        if(!searchQuery) {
            return null
        } 
        if(searchResults.length > 0) {
            return(
                <div className='Search-result-container'>
                    {searchResults.map((result) => (<div onClick={() => this.handleRedirect(result.id)} className='Search-result' key={result.id}>
                      {result.name} ({result.symbol})  
                    </div>))}
                </div>
                )
        }
        // searchResults.length === 0 = !searchResults
        if(searchResults.length === 0) {
            return(
                <div className='Search-result-container'>
                    <div className='Search-no-result'>
                        No Results Found
                    </div>
                </div>
            )
        }
    }
    
    render(){
        const {searchQuery, loading} = this.state
        return (
            <div className='Search'>
                <span className='Search-icon' />
                <input 
                    className='Search-input' 
                    type='text' 
                    placeholder='currency name' 
                    onChange={this.handleChange}
                    value={searchQuery}

                    />
                    {
                        loading && <div className='Search-loading'><Loading width='18px' height='18px' /></div>
                    }
                    {this.renderSearchResults()}
                    
            </div>
        )
    }
}

export default withRouter(Search);