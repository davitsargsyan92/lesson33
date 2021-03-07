import React from 'react';
import './Table.css'
import Loading from "../common/Loading";
import Table from './Table'
import Pagination from "./Pagination";
import {API_URL} from '../../config'
import { handleResponse } from "../../helpers";

class List extends React.Component {

    constructor(){
        super();
        this.state = {
            loading : true,
            currencies : [],
            error: null,
            page: 1,
            totalPages : null
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




    render() {

        const { currencies , loading , error , page  , totalPages} = this.state; // currencies = this.state.currencies


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
                <Table currencies={currencies}  />

                <Pagination page={page}  totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>

            </div>

        );
    }
}

export default List;
