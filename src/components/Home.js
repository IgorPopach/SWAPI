import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Tabs from './Tabs';

const Home = () => {
    const categories = useSelector(({ categories }) => categories.categories);

    const list = useMemo(() => {
        if (!categories) {
            return;
        }
        return Object.keys(categories).map(key => ({
            title: key,
            link: `/${key}`
        }))
    }, [categories]);

    return (
        <div className="container">
            <h2>Welcome to the STAR WARS DATA!</h2>
            <p>I hope you'll be enjoy here :)</p>
            <p>Please select a CATEGORY:</p>
            <nav className="navbar navbar-expand-md navbar-dark">
                {list && <Tabs {...{ list }} />}
            </nav>
        </div>
    );
};

export default Home;