import React from 'react';

const Table = (props) => {
    return (
        <div className="Table-container">
            <table className="Table">
                <thead className="Table-head">
                <tr>
                    <th>Cryptocurrency</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24H Change</th>
                    <th> favorite </th>
                </tr>
                </thead>
                <tbody className="Table-body">
                {

                    props.currencies.map(currecy => (
                        <tr key={currecy.id}>
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
                                {props.renderChangePercent(currecy.percentChange24h)}
                            </td>
                        </tr>
                    ))

                }
                </tbody>
            </table>
        </div>

    );
};

export default Table;