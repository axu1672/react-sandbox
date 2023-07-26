import React, {useRef, useLayoutEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import "./PlannerBar.css";
import EventCard from './EventCard/EventCard';

function PlannerBar(props) {
    const times = ["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM",];
    const timeElements = times.map((time) => 
        <PlannerHour Time={time}/>
    );
    const timeGrid = times.map((time) => 
        <div className='TimeGridSlot'></div>
    );

    const [dimensions, setDimensions] = useState({width:0, height:0});

    const targetRef = useRef();
    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    return (
        <div className='PlannerBar' ref={targetRef}>
            <div className='PlannerDate'>
                <h3>
                    Today - May 16th 2023
                </h3>
            </div>
            <div className='TimeMarkers'>{timeElements}</div>
            <div className='TimeGrid'>{timeGrid}</div>
            <EventCard StartTime="9:00 AM" EndTime="1:00 PM" ParentWidth={dimensions.width} EventName="Breakfast"/>
            <EventCard StartTime="5:00 AM" EndTime="7:00 AM" ParentWidth={dimensions.width} EventName="Dinner"/>
        </div>
    );
}

function PlannerHour(props) {
    return (
        <div className='PlannerHour'>
            <h1>{props.Time}</h1>
        </div>
    );
}

export default PlannerBar;