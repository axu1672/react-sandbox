import React, {useRef, useLayoutEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import './TimelineHourBlock.css';

// Div marking out an hour of the day. Example: 10 AM - 11 AM
// Id: TimeHourBlock
function TimelineHourBlock(props) {
    return (
        <div className='TimelineHourBlock' ref={props.innerRef}>

        </div>
    );
}

export default TimelineHourBlock;