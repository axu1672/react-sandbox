import React, {useRef, useLayoutEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import './TimelineHourBlock.css';

// Div marking out an hour of the day. Example: 10 AM - 11 AM
// Id: TimeHourBlock
function TimelineHourBlock(props) {

    let rows = [];

    for (let i = 0 ; i < 10 ; i ++) {
        rows.push(
            <div className='TimelineHourBlock-Row' key={"Block-" + i}></div>
        );
    }

    return (
        <div className='TimelineHourBlock' ref={props.innerRef}>
            {rows}
        </div>
    );
}

export default TimelineHourBlock;