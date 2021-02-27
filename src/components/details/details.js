import React from 'react';
import './details.css';
import Loading from '../common/loading'
import {renderChangePercent} from '../../helpers'

class Details extends React.Component{
    constructor() {
        super()
        this.state = {
            loading: false,
            currency: {},            
        }

    }

componentDidMount() {
    this.fetchCurrency(this.props.match.params.id)
}

fetchCurrency(currencyId) {
    this.setState({
        loading: true,
    })
    // const currencyId = this.props.match.params.id 
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies/${currencyId}`)
        .then(response => response.ok ? response.json() : Promise.reject)
        .then(data => {
            // console.log(data)
            this.setState({
                loading: false,
                currency: data,
            })
        })
}

componentWillReceiveProps(nextProps) {
    // console.log(nextProps, 'nextProps')
    if(nextProps.match.params.id !== this.props.match.params.id) {
        this.fetchCurrency(nextProps.match.params.id)
    }
}

    render(){
        const {loading, currency} = this.state;
        console.log(currency)
        if(loading) {
            return(
                <div className='loading-container'>
                    <Loading />
                </div>
            )
        }
    return(
        <div className='Detail'>
            <h1 className='Detail-heading'>{currency.name} ({currency.symbol})</h1>
            <div className='Detail-container'>
                <div className='Detail-item'>
                    Price <span className='Detail-value'>{currency.price}</span>
                </div>
                <div className='Detail-item'>
                    Rank <span className='Detail-value'>{currency.rank}</span>
                </div>
                <div className='Detail-item'>
                    24h change <span className='Detail-value'>{renderChangePercent(currency.percentChange24h)}</span>
                </div>
                <div className='Detail-item'>
                     <span className='Detail-title'>Market Cap</span><span className='Detail-dollar'>$</span>{currency.marketCap}
                </div>
                <div className='Detail-item'>
                     <span className='Detail-title'>24h Volume</span><span className='Detail-dollar'>$</span>{currency.volume24h}
                </div>
                
                <div className='Detail-item'>
                    Total supply<span className='Detail-title'>$</span>{currency.totalSupply}
                </div>
    
            </div>
            
        </div>
    )
}
}
export default Details;