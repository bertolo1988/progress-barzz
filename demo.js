let Progress = require('./src/ProgressBarzz');

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function run() {
  const maxTicks = 5;
  let barGenerator = new Progress(maxTicks);
  for (let i = 0; i < maxTicks; i++) {
    await sleep(1000);
    console.log(barGenerator.tick());
  }
}

run();
