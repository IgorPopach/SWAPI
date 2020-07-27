import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Tabs from './Tabs';
import { storeSearch } from '../store/actions/searchActions';

const Header = ({ categories }) => {
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    const list = useMemo(() => {
        if (!categories) {
            return;
        }
        return Object.keys(categories).map(key => ({
            title: key,
            link: `/${key}`
        }))
    }, [categories]);

    const onChangeHandler = ({ target }) => {
        setSearchValue(target.value);
        dispatch(storeSearch(target.value));
    };

    const onClearSearch = () => {
        setSearchValue('');
        dispatch(storeSearch(''));
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to='/home'>Star Wars Data</Link>
                {list && <Tabs {...{ list }} />}
                <div className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        onChange={onChangeHandler}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        onClick={onClearSearch}
                    >
                        Clear
                </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;