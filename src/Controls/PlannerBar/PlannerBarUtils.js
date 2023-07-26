function GetStartPosition(time) {
    let t = ParseTime(time);
    let m = ParseTimeToMinutes(t);

    return ((m/1440) * 100).toFixed(2);
}

function GetWidth(startTime, endTime) {
    let st = ParseTime(startTime);
    let et = ParseTime(endTime);

    let sm = ParseTimeToMinutes(st);
    let em = ParseTimeToMinutes(et);

    let diff = em - sm;

    return ((diff/1440) * 100).toFixed(2);
}

function ParseTime(time) {
    let t = [];

    let splitOnColon = time.split(':');
    t.push(splitOnColon[0]);

    let splitOnSpace = splitOnColon[1].split(' ');
    t.push(splitOnSpace[0]);
    t.push(splitOnSpace[1]);

    return t;
}

// Parses time into minutes relative to 8AM
function ParseTimeToMinutes(t) {
    let hour = parseInt(t[0]);
    let minutes = parseInt(t[1]);
    let AMPM = t[2];

    let adjHour = hour;
    if (AMPM.toLowerCase() == "pm") {
        adjHour += 12;
    }

    if (adjHour >= 8) adjHour -= 8;
    else {
        adjHour += 16;
    }

    return (adjHour * 60) + minutes;
}

const PlannerBarUtils = {GetStartPosition, GetWidth};
export default PlannerBarUtils;