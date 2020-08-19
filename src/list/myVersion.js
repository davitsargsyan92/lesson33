import React from 'react';
import './table.css';

class MyList extends React.Component{
    constructor(){
        super();
        this.state = {
            cryptocurrencis: [],
            loading: false,
        }
    }

    componentDidMount(){
        this.setState({
            loading: true,
        })
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
        .then(response.ok ? response.json(): Promise.reject)
        .then(data => {
            this.setState({
                loading: false,
                cryptocurrencies: data.currencies
            })
        })
    }


    render(){
        if(this.state.loading){
        return(
            <div>
                Loading...
            </div>
            )
        }
        return(
            <div className='Table-container'>
                <table className='Table'> 
                    <thead className='Table-head'>
                        <tr>
                            <th onClick={this.handleNameClick}>Cryptocurrrency</th>
                            <th onClick={this.handlePriceClick}>Price</th>
                            <th onClick={this.handleMarketCapClick}>Market Cap</th>
                            <th>Percent Change 24h</th>
                        </tr>
                    </thead>
                    <tbody className='Table-body'>
                        {this.state.cryptocurrencies.map((cryptocurrency) => {
                            return (
                                <tr key={cryptocurrency.id}>
                                    <td><span className='Table-rank'>{cryptocurrency.rank}</span>{cryptocurrency.name}</td>
                                    <td><span className='Table-dollar'>$</span>{cryptocurrency.price}</td>
                                    <td><span className='Table-dollar'>$</span>{cryptocurrency.marketCap}</td>
                                    <td>{this.renderChangePercent(cryptocurrency.percentChange24h)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default MyList;