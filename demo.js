var Progress = require('./dist/progress-bar');

const HASHES = 20;
const timeout = 200;

function printTick() {
	console.log(Progress.tick());
}

Progress.init(HASHES);
for (let i = 0; i < HASHES; i++) {
	setTimeout(printTick, timeout * i);
}