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

function GetCurrentTime() {
    let currentDate = new Date();
    let dateTime = currentDate.getDate();
    let hour = parseInt(currentDate.getHours());
    let min = parseInt(currentDate.getMinutes());
    let sec = parseInt(currentDate.getSeconds());

    let position_px = 40; // Initial offset
    position_px += (hour - 1) * 80; // Hours
    let second_offset = (min * 60) + sec;
    position_px += (80 * (second_offset / 3600)); // Offset by rest of time

    return {
        Hour: hour,
        Minute: min,
        Second: sec,
        TimeString: currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(),
        Position: position_px,
        CurrentDateTime: currentDate,
        TodaysDate: dateTime
    };
}

const TimelineUtils = {GetBlockPositionObject, GetCurrentTime};

export default TimelineUtils;