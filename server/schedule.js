class Schedule{
    constructor(fromDate, toDate, triggerFunc, content){
        const fromDate = Date.parse(fromDate);
        const toDate = Date.parse(toDate);
        if(fromDate instanceof Date && toDate instanceof Date){
            // 计划的结束时间必须大于起始时间5秒
            if(toDate.getTime() - fromDate.getTime() > 5){
                const wrapTrigger = () => {
                    if(Date.now() >= fromDate.getTime() && Date.now() <= toDate.getTime()){
                        triggerFunc();
                    }
                this.evtId = setInterval(wrapTrigger, 1000);
                }

            } else {
                throw 'date wrong';
            }
        }
    }
}
