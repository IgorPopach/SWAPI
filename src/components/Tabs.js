import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ list, onClick }) => {

    return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                {list.map(el => (
                    <li key={el.link} className="nav-item">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to={el.link}
                            {...{ onClick }}
                        >
                            {el.title.toUpperCase()}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Tabs);