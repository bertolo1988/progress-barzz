const moment = require('moment');

class ProgressBarzz {
  constructor(maxTicks) {
    if (!maxTicks)
      throw new Error(
        'ProgressBarzz|Maximum number of ticks needs to be specified!'
      );
    this.maxBarSize = 30;
    this.etaMomentFormat = 'lll';
    this.begin = moment();
    this.tickCount = 0;
    this.maxTicks = maxTicks;
  }

  tick() {
    this.tickCount++;
    return this._render();
  }

  _getPercentage() {
    return Math.min(100, Math.floor((this.tickCount / this.maxTicks) * 100));
  }

  _getAverageTimePerTickMs() {
    return moment().diff(this.begin) / this.tickCount;
  }

  _getAverageRoundedUpTimePerTickSeconds() {
    return Math.ceil(this._getAverageTimePerTickMs() / 1000);
  }

  _getEstimatedEndTime() {
    let averageSecondsPerTick = this._getAverageRoundedUpTimePerTickSeconds();
    let ticksLeft = this.maxTicks - this.tickCount;
    let secondsLeft = ticksLeft * averageSecondsPerTick;
    let endMoment = moment().add(secondsLeft, 'seconds');
    return endMoment.format(this.etaMomentFormat);
  }

  _renderBarGraph(percentage) {
    const COMPLETE = '#';
    const INCOMPLETE = '-';
    let bar = '';
    let completes = Math.floor((percentage * this.maxBarSize) / 100);
    let incompletes = Math.max(0, this.maxBarSize - completes);
    for (let i = 0; i < completes; i++) {
      bar += COMPLETE;
    }
    for (let i = 0; i < incompletes; i++) {
      bar += INCOMPLETE;
    }
    return bar;
  }

  _render() {
    return `${this.tickCount}/${this.maxTicks} ${this._renderBarGraph(
      this._getPercentage()
    )} ${this._getPercentage()}% ${this._getAverageRoundedUpTimePerTickSeconds()}s/tick ETA:${this._getEstimatedEndTime()}`;
  }
}

module.exports = ProgressBarzz;
