import React, { useEffect } from 'react';

import Pagination from './Pagination';

const Table = ({ category, tableData, onViewDetails, onChangeList, paginationInfo, sortTableByKey }) => {

    return (
        <div className="table-component">
            <h2>{category}</h2>
            <Pagination {...{ paginationInfo, onChangeList }} />
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        {Object.keys(tableData[0].tableInfo).map((e, index) => (
                            <th
                                key={index}
                                onClick={sortTableByKey.bind(this, e)}
                            >
                                {e.toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(row => (
                        <tr key={row.id} onClick={onViewDetails.bind(this, row.id)}>
                            {Object.keys(row.tableInfo).map(key => (
                                <td {...{ key }}>{row.tableInfo[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;