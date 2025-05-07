/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    var count=0;
    for(var i=0;i<=hours.length;i++)
    {
        if(hours[i]>=target)
        {
            count=count+1
        }

    }
                        return(count)

};