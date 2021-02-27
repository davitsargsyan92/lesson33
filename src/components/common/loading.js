import React from 'react';
import './loading.css'
import PropTypes from 'prop-types'
 
function Loading(props){
    const {width, height} = props
    return (
        <div 
        style={{width: width, height: height}}
        className='Loading'/>
    )
}

Loading.propTypes={
    width: PropTypes.string,
    height: PropTypes.string
}

Loading.defaultProps={
    width: '56px',
    height: '56px'
}


export default Loading;