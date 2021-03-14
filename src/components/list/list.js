import React from 'react';
import './Table.css'
import Loading from "../common/Loading";
import Table from './Table'
import Pagination from "./Pagination";
import {API_URL} from '../../config'
import { handleResponse, onFavoriteClickCB } from "../../helpers";

class List extends React.Component {

    constructor(){
        super();
        this.state = {
            loading : true,
            currencies : [],
            error: null,
            page: 1,
            totalPages : null,
            favorites : JSON.parse(localStorage.getItem("favorites")) || []
        }
    }

    handlePaginationClick = direction => {
        let { page } = this.state;
        page = direction === "next" ? page + 1 : page -1; // ternary operator

        this.setState({
            page
        } , this.fetchCurrencies)
    };

    fetchCurrencies = () => {

        this.setState({
            loading: true
        });
        const {page} = this.state;
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then(data => {
                this.setState({
                    currencies : data.currencies,
                    totalPages: data.totalPages,
                    loading : false
                })

            })
            .catch(() => {

                this.setState({
                    error : "Something went wrong",
                    loading: false
                })
            })
    };



    componentDidMount() {

        this.fetchCurrencies();

    }

    handleFavoriteClick = (event , currency) => {
        event.stopPropagation();

        this.setState(prevState => onFavoriteClickCB(prevState , currency))
        
    }




    render() {

        console.log(this.state.favorites , "favorites")

        const { currencies , loading , error , page  , totalPages , favorites} = this.state; // currencies = this.state.currencies
        const favoriteCurrencyID = favorites.map(item => item.id);


        if(loading){
            return <div className="loading-container">
                <Loading/>
            </div>
        }

        if(error){
            return <div className="error">{error}</div>
        }


        return (
            <div>
                <Table currencies={currencies}  onFavoriteClick={this.handleFavoriteClick} favorites={favoriteCurrencyID}/>

                <Pagination page={page}  totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>

            </div>

        );
    }
}

export default List;
