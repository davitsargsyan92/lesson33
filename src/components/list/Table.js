import React from 'react';
import { withRouter } from "react-router";
import { renderChangePercent } from "../../helpers"; // HIGHER ORDER COMPONENT (HOC)

const Table = (props) => {
   const {currencies , history} = props;
    return (
        <div className="Table-container">
            <table className="Table">
                <thead className="Table-head">
                <tr>
                    <th>Cryptocurrency</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24H Change</th>
                    <th>Favorites</th>
                </tr>
                </thead>
                <tbody className="Table-body">
                {

                    currencies.map(currecy => (
                        <tr key={currecy.id} onClick={() => {
                            history.push(`/currency/${currecy.id}`)
                        }}>
                            <td >
                                <span className="Table-rank">{currecy.rank}</span>
                                {currecy.name}
                            </td>
                            <td>
                                <span className="Table-dollar">$</span>
                                {currecy.price}
                            </td>
                            <td>
                                <span className="Table-dollar">$</span>
                                {currecy.marketCap}
                            </td>
                            <td>
                                {renderChangePercent(currecy.percentChange24h)}
                            </td>
                        </tr>
                    ))

                }
                </tbody>
            </table>
        </div>

    );
};

export default withRouter(Table);