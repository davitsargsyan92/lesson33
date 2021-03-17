import React , {Component} from 'react';
import './Search.css';
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";
import Loading from './Loading'
import {withRouter} from "react-router";

class Search extends Component {
    constructor(){
        super();
        this.state = {
            searchResults: [],
            loading: false,
            searchQuery: ''
        }
    }

    handleChange = (event)  => {

        const searchQuery = event.target.value;

        this.setState({
            searchQuery
        });

        if(!searchQuery){
            return null;
        }

        this.setState({loading: true});
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(handleResponse)
            .then(result => {
                this.setState({
                    searchResults: result,
                    loading: false
                })
            })

    };

    handleRedirect = (currencyId) => {
        this.setState({
            searchQuery : '',
            searchResults: []
        })
        this.props.history.push(`/currency/${currencyId}`)
    }

    renderSearchResults = () => {
        const { searchResults, searchQuery, loading } = this.state;

        if(!searchQuery){
            return null
        }

        if(searchResults.length > 0){
            return (
                <div className="Search-result-container">
                    {searchResults.map(result => (
                        <div className="Search-result" key={result.id} onClick={() => this.handleRedirect(result.id)}>
                            {result.name} ({result.symbol})
                        </div>
                    ))}
                </div>
            )
        }

        if (!loading) {
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No results found.
                    </div>
                </div>
            );
        }

    }

    render() {

        const {searchQuery , loading} = this.state;


        return (
            <div className="Search">
                <span className="Search-icon" />

                <input
                    className="Search-input"
                    type="text"
                    placeholder="Currency name"
                    onChange={this.handleChange}
                    value={searchQuery}
                />



                {loading && (
                    <div className="Search-loading">
                        <Loading width="12px" height="12px"/>
                    </div>
                )}


                {this.renderSearchResults()}

        </div>
        )
    }
}

export default withRouter(Search);