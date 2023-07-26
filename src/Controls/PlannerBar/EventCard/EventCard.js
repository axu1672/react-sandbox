import React from 'react';
import "./EventCard.css"
import PlannerBarUtils from '../PlannerBarUtils';

function EventCard(props) {
    const left = PlannerBarUtils.GetStartPosition(props.StartTime);
    const width = PlannerBarUtils.GetWidth(props.StartTime, props.EndTime);

    const lefts = left.toString() + "%";
    const widths = width.toString() + "%";

    return (
        <div className='EventCard' style={{left: lefts, width: widths}}>
            <div className='EventTypeIndicator'></div>
            <div className="EventCardTitle">
                <p>{props.EventName}</p>
            </div>
        </div>
    );
}

export default EventCard;