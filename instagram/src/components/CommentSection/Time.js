import React from 'react';
import moment from 'moment';

function Time(props) {
    return(
        <span>{moment(props.time.timestamp).format('MMMM Do YYYY, hh:mm:ss a').fromNow()}</span>
    ) 
}

export default Time;