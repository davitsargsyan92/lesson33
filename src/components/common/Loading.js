import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';


const Loading = (props) => {
    const {width , height} = props;
    return (
        <div className="Loading" style={{width , height}}/>
    );
};

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Loading.defaultProps = {
    width: "56px",
    height: "56px"
};

export default Loading;