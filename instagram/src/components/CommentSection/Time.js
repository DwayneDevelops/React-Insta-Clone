import React from 'react';
import moment from 'moment';

function Time(props) {
    return(
        <span>{moment(props.time.timestamp).startOf('hour').fromNow()}</span>
    ) 
}

export default Time;