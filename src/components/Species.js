import React from 'react';

import PageView from '../containers/PageView';
import setIdentifier from '../utils/setIdentifier';

const Species = ({ match }) => {
    const { path, url } = match;
    const identifier = setIdentifier(path);
    return (
        <PageView {...{ url, identifier }} />
    );
};

export default Species;