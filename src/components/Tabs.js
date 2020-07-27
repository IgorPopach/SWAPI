import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ list }) => {

    return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                {list.map(el => (
                    <li key={el.link} className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to={el.link}>{el.title.toUpperCase()}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;