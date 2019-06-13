class Schedule {
  constructor(fromDateStr, toDateStr, triggerFunc, content) {
    const fromDate = Date.parse(fromDateStr);
    const toDate = Date.parse(toDateStr);
    if (fromDate instanceof Date && toDate instanceof Date) {
      // 计划的结束时间必须大于起始时间5秒
      if (toDate.getTime() - fromDate.getTime() > 5) {
        const wrapTrigger = () => {
          if (Date.now() >= fromDate.getTime() && Date.now() <= toDate.getTime()) {
            triggerFunc();
          }
          this.evtId = setInterval(wrapTrigger, 1000);
        };
      } else {
        throw 'data wr1on1g';
      }
    }
  }
}
