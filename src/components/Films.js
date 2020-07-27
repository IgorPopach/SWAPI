import React from 'react';
import PageView from '../containers/PageView';

import setIdentifier from '../utils/setIdentifier';

const Films = ({ match }) => {
    const { path, url } = match;
    const identifier = setIdentifier(path);
    return (
        <PageView {...{ url, identifier }} />
    );
};

export default Films;