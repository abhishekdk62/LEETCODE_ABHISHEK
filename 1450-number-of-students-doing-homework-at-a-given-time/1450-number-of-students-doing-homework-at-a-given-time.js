var busyStudent = function (startTime, endTime, queryTime) {
    return startTime.reduce((acc, cur, i) => {
        return (cur <= queryTime && queryTime <= endTime[i]) ? acc + 1 : acc
    }, 0);

};
