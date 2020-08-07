import React, { useMemo, useCallback } from 'react';

const Pagination = ({ paginationInfo, onChangeList }) => {

    const linksNumbers = useMemo(() => {
        if (!paginationInfo) return;
        let numbers = []
        if (!paginationInfo.previous) {
            numbers = [1, 2, 3]
        } else {
            const num = +paginationInfo.previous.split('=')[1];
            numbers = numbers.concat([num, num + 1, num + 2]);
        }
        return numbers;
    }, [paginationInfo]);

    const clickPrevHandler = useCallback(() => {
        if (!paginationInfo.previous) {
            return;
        }
        onChangeList(+paginationInfo.previous.split('=')[1]);
    }, [onChangeList, paginationInfo]);

    const clickNextHandler = useCallback(() => {
        if (!paginationInfo.next) {
            return;
        }
        onChangeList(+paginationInfo.next.split('=')[1]);
    }, [onChangeList, paginationInfo]);

    if (!paginationInfo) {
        return <div style={{ height: '25px', 'marginBottom': '1rem' }} ></div>
    }

    return (
        <nav>
            <ul className="pagination">
                <li
                    className="page-item"
                    onClick={clickPrevHandler}
                >
                    <span className="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>
                {linksNumbers.map(num => (
                    <li
                        key={num}
                        className="page-item"
                        onClick={onChangeList.bind(this, num)}
                    >
                        <span className="page-link">
                            {num}
                        </span>
                    </li>
                ))}
                <li
                    className="page-item"
                    onClick={clickNextHandler}
                >
                    <span className="page-link">
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default React.memo(Pagination);