const should = require('should');

const Utils = require('../src/Utils');
var Progress = require('../src/ProgressBarzz');

function getEtaTimeFromBar(bar) {
  let etaSplit = bar.split('ETA:');
  return etaSplit[1];
}

function splitBarParts(bar) {
  let etaTime = getEtaTimeFromBar(bar);
  let barParts = bar.split(' ');
  return {
    ticksDone: barParts[0],
    graph: barParts[1],
    percentage: barParts[2],
    secondsPerTick: barParts[3],
    etaTime
  };
}

describe('progress bar test', function () {
  it('should get an error when trying to create a progress bar without maxTicks', () => {
    try {
      new Progress();
    } catch (err) {
      should.exist(err);
      err.message.should.be.eql(
        'ProgressBarzz|Maximum number of ticks needs to be specified!'
      );
    }
  });

  it('should get an instance of progress bar if created correctly and have a method called tick', () => {
    let bar = new Progress(50);
    should.exist(bar);
    bar.should.be.an.instanceOf(Object).and.have.property('tick');
  });

  it('should render a complete progress bar on tick', () => {
    const maxTicks = 1;
    let barGenerator = new Progress(maxTicks);
    let bar = barGenerator.tick();
    let barParts = splitBarParts(bar);
    barParts.ticksDone.should.be.eql(`1/${maxTicks}`);
    barParts.graph.should.be.eql(`##############################`);
    barParts.percentage.should.be.eql(`100%`);
    barParts.secondsPerTick.includes('s/tick').should.be.true();
    Utils.isValidDateString(
      barParts.etaTime,
      barGenerator.etaMomentFormat
    ).should.be.true();
  });

  it('should render a 20% progress bar on tick', () => {
    const maxTicks = 5;
    let barGenerator = new Progress(maxTicks);
    let bar = barGenerator.tick();
    let barParts = splitBarParts(bar);
    barParts.ticksDone.should.be.eql(`1/${maxTicks}`);
    barParts.graph.should.be.eql(`######------------------------`);
    barParts.percentage.should.be.eql(`20%`);
  });

  it('time per tick should never be inferior than sleep time if bar is ticked once', async () => {
    const maxTicks = 10;
    const sleepTime = 1000;
    let barGenerator = new Progress(maxTicks);
    await Utils.sleep(sleepTime);
    let bar = barGenerator.tick();
    let barParts = splitBarParts(bar);
    barParts.secondsPerTick.includes('s/tick').should.be.true();
    let secondsPerTickDigit = Utils.getDigitsFromString(
      barParts.secondsPerTick
    );
    parseInt(secondsPerTickDigit).should.be.aboveOrEqual(sleepTime / 1000);
  });

  it('time per tick should never be inferior than sleep time and should be rounded up using ceil', async () => {
    const maxTicks = 10;
    // 100ms will be rounded up to 1 second
    const sleepTime = 100;
    let maxTicksCount = 4;
    let bar;
    let barGenerator = new Progress(maxTicks);
    for (let i = 0; i < maxTicksCount; i++) {
      await Utils.sleep(sleepTime);
      bar = barGenerator.tick();
    }
    let barParts = splitBarParts(bar);
    barParts.secondsPerTick.includes('s/tick').should.be.true();
    let secondsPerTickDigit = Utils.getDigitsFromString(
      barParts.secondsPerTick
    );
    parseInt(secondsPerTickDigit).should.be.aboveOrEqual(1);
  });
});
