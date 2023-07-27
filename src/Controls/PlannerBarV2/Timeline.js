import React, {useRef, useLayoutEffect, useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";
import './Timeline.css';
import TimelineHourBlock from './TimelineHourBlock';
import TimelineUtils from './TimelineUtility';

// Main Div for Timeline control
// Id: Timeline
function Timeline(props) {

    const [bounds, setBounds] = useState({});

    const [sidebarWidth, setSidebarWidth] = useState({
        active: false,
        sidebarWidth: "0%",
        mainBodyWidth: "100%"
    });

    function GetBlockBounds(tempBounds) {
        useEffect(() => {
            setBounds(tempBounds);
        }, []);
    }

    function ToggleSideBar() {
        if (sidebarWidth.active) {
            setSidebarWidth(
                {
                    active: false,
                    sidebarWidth: "0%",
                    mainBodyWidth: "100%"
                }
            );
        }
        else {
            setSidebarWidth(
                {
                    active: true,
                    sidebarWidth: "15%",
                    mainBodyWidth: "85%"
                }
            );
        }
    }

    return (
        <div className='Timeline'>
            <TimelineSideBar width={sidebarWidth.sidebarWidth}/>
            <div className='Timeline-MainBody' style={{width: sidebarWidth.mainBodyWidth}}>
                <TimelineHeader onExpand={ToggleSideBar}/>
                <div className='TimelineFullContainer'>
                    <TimelineHourMarkerBar/>
                    <TimelineBlockContainer onload={GetBlockBounds}/>
                </div>
            </div>
        </div>
    );
}

function TimelineSideBar(props) {

    return (
        <div className='Timeline-Sidebar' style={{width: props.width}}>
            <div className='Timeline-Sidebar-Header'></div>
            <div className='Timeline-Sidebar-Body'></div>
        </div>
    );
}

// Div containing all of the hour blocks 
// Id: BlockContainer
function TimelineBlockContainer(props) {
    const h = [
        "7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM"
        ,"3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM",
        "11 PM","12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM"
    ];

    let TimelineBlocks = [];

    let rows = [];
    for (let i = 0 ; i < 10 ; i ++) {
        rows.push(
            <div className='TimelineSpacerBlock-Row' key={"Block-" + i}></div>
        );
    }

    TimelineBlocks.push(<div className='Timelineblock-LeadSpacer'>{rows}</div>);
    const refs = React.createRef();

    let tempBounds = {};
    for (let i = 0 ; i < h.length - 1 ; i ++) {
        TimelineBlocks.push(<TimelineHourBlock startTime={h[i]} endTime={h[i+1]} key={i} innerRef={(element) => 
            {
                if (!element) return;

                tempBounds[i] = {
                    width: element.getBoundingClientRect().width,
                    height: element.getBoundingClientRect().height,
                    top: element.getBoundingClientRect().top,
                    left: element.getBoundingClientRect().left
                }
            }
        }/>);
    }

    props.onload(tempBounds);
  
    TimelineBlocks.push(<div className='Timelineblock-EndSpacer'>{rows}</div>);

    return (
        <div className='Timeline-Blocks'>
            {TimelineBlocks}
        </div>
    );
}

// Div containing each marker of an hour. Example '7 AM'.
// Id: HourBar
function TimelineHourMarkerBar() {
    const h = [
        "7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM"
        ,"3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM",
        "11 PM","12 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM"
    ];

    const helem = h.map((x, index) => <div className='Timeline-Marker' key={'tm' + index}>
        {x}
    </div>);

    return (
        <div className='Timeline-Markers'>
            {helem}
        </div>
    );
}

// Div containing the date that the timeline is set to.
// Id: TimeHead
function TimelineHeader(props) {

    const [expandButtonState, setExpandButtonState] = useState(">>");

    function OnClickExpand() {
        props.onExpand();
        if (expandButtonState === ">>") {
            setExpandButtonState("<<");
        }
        else {
            setExpandButtonState(">>");
        }
    }

    return (
        <div className='Timeline-Header'>
            <button onClick={OnClickExpand}>{expandButtonState}</button>
            <div className='Timeline-HeaderText'>Today</div>
        </div>
    );
}

export default Timeline;