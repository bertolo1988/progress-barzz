const moment = require('moment');

const PROGRESS_BAR_SIZE = 30;
const COMPLETE = '#';
const INCOMPLETE = '-';

class ProgressBarzz {
  constructor(maxTicks) {
    if (!maxTicks)
      throw new Error(
        'ProgressBarzz|Maximum number of ticks needs to be specified!'
      );
    this.begin = moment();
    this.tickCount = 0;
    this.maxTicks = maxTicks;
  }

  tick() {
    this.tickCount++;
    return this._render();
  }

  _getPercentage() {
    return Math.floor((this.tickCount / this.maxTicks) * 100);
  }

  _getAverageTimePerTickMs() {
    return moment().diff(this.begin) / this.tickCount;
  }

  _renderBarGraph(percentage) {
    let bar = '';
    let completes = Math.floor((percentage * PROGRESS_BAR_SIZE) / 100);
    let incompletes = PROGRESS_BAR_SIZE - completes;
    for (let i = 0; i < completes; i++) {
      bar += COMPLETE;
    }
    for (let i = 0; i < incompletes; i++) {
      bar += INCOMPLETE;
    }
    return bar;
  }

  _render() {
    /*     let averageTimePerTickMs = this._getAverageTimePerTickMs();
    let result = done + '/' + todo;
    result += ' ' + drawBar();
    result += ' ' + getPercentage() + '%';
    result += ' ' + parseInt(getAverageTickTime() / 1000) + 's/tick';
    result += ' ETA:' + getEstimatedEndTime(); */
    return `${this.tickCount}/${this.maxTicks} ${this._renderBarGraph(
      this._getPercentage()
    )} ${this._getPercentage()}%`;
  }
}

module.exports = ProgressBarzz;
