import React from 'react';
import './Table.css'
import Loading from "../common/Loading";
import Table from './Table'
import Pagination from "./Pagination";
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

    // handleRightClick = () => {
    //
    //     this.setState({
    //         page : this.state.page + 1
    //     } , this.fetchCurrencies);
    //
    // }
    //
    // handleLeftClick = () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     } , this.fetchCurrencies);
    //
    // }

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
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=${page}&perPage=20`)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                return Promise.reject(response)
            })
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


    renderChangePercent(percent){
        if(percent > 0){
            return <span className="percent-raised"> {percent} % &uarr;</span>
        }
        else if(percent < 0){
            return <span className="percent-fallen"> {percent} % &darr;</span>
        }else{
            return <span>{percent}</span>
        }
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
                <Table currencies={currencies} renderChangePercent={this.renderChangePercent}/>

                <Pagination page={page}  totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>

            </div>

        );
    }
}

export default List;
