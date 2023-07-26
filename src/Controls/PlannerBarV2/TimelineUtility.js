function GetBlockPositionObject(timeArr, refs, event) {
    let timeframe = event.timeframe;
    if (!timeframe) return null;

    let key = TimeframeToKey(timeframe);
    let block = refs[key];

    // Get the length of the event
    let hourScale = block.width;
    let hours = TimeframeToHours(timeframe);
    let ewidth = hours * hourScale;

    
}

function TimeframeToHours(timeframe) {

}

function TimeframeToKey(timeframe) {

}

const TimelineUtils = {GetBlockPositionObject};

export default TimelineUtils;