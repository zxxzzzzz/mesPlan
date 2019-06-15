class Schedule {
  constructor(fromDateStr, toDateStr, triggerFunc, content) {
    this.fromDateTime = Date.parse(fromDateStr);
    this.toDateTime = Date.parse(toDateStr);
    this.content = content;
    if (typeof this.fromDateTime === 'number' && typeof this.toDateTime === 'number') {
      // 计划的结束时间必须大于起始时间5秒
      if (this.toDateTime - this.fromDateTime > 5000) {
        const wrapTrigger = () => {
          if (Date.now() >= this.fromDateTime && Date.now() <= this.toDateTime) {
            try {
              triggerFunc(this);
            } catch (error) {
              throw Error('triggerFunc must be a function');
            }
          }
        };
        this.evtId = setInterval(wrapTrigger, 1000);
      } else {
        throw Error('date error');
      }
    }
  }
}

exports.Schedule = Schedule;

// const evalstr = `
// return new Schedule('2019-6-15', '2019-6-16', (sch) => {console.log(sch.content)}, 'hello')
// `;
// const func = new Function('Schedule', evalstr);

// func(Schedule);
