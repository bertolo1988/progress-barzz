var should = require('should');
const Utils = require('../src/Utils');
var Progress = require('../src/ProgressBarzz');

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
    let bar = new Progress(maxTicks);
    bar
      .tick()
      .should.be.eql(`1/${maxTicks} ############################## 100%`);
  });

  it('should render a 20% progress bar on tick', () => {
    const maxTicks = 5;
    let bar = new Progress(maxTicks);
    bar
      .tick()
      .should.be.eql(`1/${maxTicks} ######------------------------ 20%`);
  });

  it.skip('if has 10 elements and spends 2 seconds in the first, it should give ETA for 10x2=20', async () => {});
});
