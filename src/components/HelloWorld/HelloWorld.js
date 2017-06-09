import React from 'react';
import PropTypes from 'prop-types';

/** A Hello World component */
const HelloWorld = ({ message }) => {
    return <div>Hello {message}</div>;
};

HelloWorld.propTypes =  {
    /** Message to display */
    message: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
    message: 'World'
};

export default HelloWorld;