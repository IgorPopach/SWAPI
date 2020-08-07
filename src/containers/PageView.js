import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDataEpic, fetchLinksDataEpic } from '../store/actions/categoriesActions';
import { convertTableInfo, convertDetailInfo } from '../utils/converter';
import Table from '../components/Table';
import DetailInfo from '../components/DetalInfo';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import { storeSearch } from '../store/actions/searchActions';

const PageView = ({ url, identifier }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const categoriesData = useSelector(({ categories }) => categories.data);
    const search = useSelector(({ search }) => search.search);

    const [category, setCategory] = useState(identifier);
    const [categoryData, setCategoryData] = useState(null);
    const [paginationInfo, setPaginationInfo] = useState(null);
    const [tableData, setTableData] = useState(null);
    const [detailInfo, setDetailInfo] = useState(null);

    const dispatch = useDispatch();

    const onViewDetails = (id) => {
        const currentItem = categoryData.find(item => item.url === id);
        setDetailInfo(convertDetailInfo(category, currentItem));
    }

    const sortTableByKey = (key) => {
        const sortedData = [...tableData].sort((a, b) => {
            if (a.tableInfo[key] < b.tableInfo[key]) return -1;
            if (a.tableInfo[key] > b.tableInfo[key]) return 1;
            return 0;
        });
        setTableData(sortedData);
    };


    const loadLinksData = useCallback(async (category, links) => {
        setError(null);
        try {
            const data = await dispatch(fetchLinksDataEpic(category, links));
            return data;
        } catch (err) {
            setError(err.message)
        }
    }, [dispatch]);

    const onClickListLinks = async (category, links) => {
        setIsLoading(true);
        loadLinksData(category, links).then((data) => {
            setCategory(category);
            setCategoryData(data);
            setPaginationInfo(null);
            dispatch(storeSearch(''));
            setIsLoading(false);
        });
    }

    const loadData = useCallback(async (identifier, params) => {
        setError(null);
        try {
            await dispatch(fetchDataEpic(identifier, params));
        } catch (err) {
            setError(err.message)
        }
    }, [dispatch]);

    const onChangeList = (page) => {
        setIsLoading(true);
        loadData(identifier, { page }).then(() => setIsLoading(false))
    };

    useEffect(() => {
        setTableData(null);
        setCategory(identifier);
        setIsLoading(true);
        loadData(identifier, { search }).then(() => setIsLoading(false))
    }, [loadData, dispatch, identifier, search]);

    useEffect(() => {
        if (categoryData) {
            const data = categoryData.map((item) => {
                const tableInfo = convertTableInfo(category, item);
                return {
                    id: item.url,
                    tableInfo
                }
            });
            setTableData(data);
        };
    }, [categoryData, category]);

    useEffect(() => {
        if (categoriesData && categoriesData[identifier]) {
            setCategoryData(categoriesData[identifier].results);
            setPaginationInfo({
                count: categoriesData[identifier].count,
                next: categoriesData[identifier].next,
                previous: categoriesData[identifier].previous
            });
        }
    }, [categoriesData, identifier]);

    if (error) {
        return (<div>
            <h2>An error occurred!</h2>
            <p>{error}</p>
            <Button onClick={loadData.bind(this, identifier)}>Load Data Again</Button>
        </div>)
    };

    if (isLoading) {
        return <Spinner />;
    };

    return (
        <div className="page-view">
            {tableData ?
                <Table {...{
                    tableData,
                    onViewDetails,
                    onChangeList,
                    category,
                    paginationInfo,
                    sortTableByKey
                }}
                /> :
                <Spinner />}
            {detailInfo && <DetailInfo {...{ detailInfo, onClickListLinks }} />}
        </div>
    );
};

export default React.memo(PageView);