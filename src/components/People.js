import React from 'react';
import PageView from '../containers/PageView';

import setIdentifier from '../utils/setIdentifier';

const People = ({ match }) => {
    const { path, url } = match;
    const identifier = setIdentifier(path);

    return (
        <PageView {...{ url, identifier }} />
    );
}
export default People;