import React from 'react';

const Button = ({ children, onClick }) => (
    <button {...{ onClick }} type="button" className="btn btn btn-outline-light">{children}</button>
);

export default Button;