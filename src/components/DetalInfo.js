import React from 'react';

const DetailInfo = ({ detailInfo, onClickListLinks }) => {

    const onlickHandler = (category, link) => {
        if (link.length === 0) return;
        if (category === 'characters' || category === 'residents') {
            category = 'people'
        }
        onClickListLinks(category, link);
    }

    return (
        <div className="details">
            <h2>{detailInfo.info.name}</h2>
            <div className="list-container">
                <div className="list-container-details">
                    <p>Details:</p>
                    <ul className="list-group list-group-flush details-info">
                        {Object.keys(detailInfo.info).map(title => (
                            <li key={title} className="list-group-item list-group-item-dark">
                                <h3>{title}</h3>
                                <p>{detailInfo.info[title]}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="list-container-links">
                    <p>Related Links:</p>
                    <ul className="list-group details-links">
                        {Object.keys(detailInfo.links).map(category => (
                            <li
                                key={category}
                                className="list-group-item d-flex justify-content-between list-group-item-dark"
                                onClick={onlickHandler.bind(this, category, detailInfo.links[category])}
                            >
                                <h3>{category}</h3>
                                <span className="badge badge-primary badge-pill">{detailInfo.links[category].length}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailInfo;