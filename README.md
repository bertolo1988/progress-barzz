# progress-barzz

A simple textual progress bar with a time estimation.

[![Build Status](https://travis-ci.org/bertolo1988/progress-barzz.svg?branch=master)](https://travis-ci.org/bertolo1988/progress-barzz)

```js
let barGenerator = new Progress(maxTicks);
console.log(barGenerator.tick());
```


## Installing

```bash
$ npm install --save progress-barzz
````

## Demo output example

```
1/5 ######------------------------ 20% 2s/tick ETA:Nov 27, 2020 12:31 AM
2/5 ############------------------ 40% 2s/tick ETA:Nov 27, 2020 12:31 AM
3/5 ##################------------ 60% 2s/tick ETA:Nov 27, 2020 12:31 AM
4/5 ########################------ 80% 2s/tick ETA:Nov 27, 2020 12:31 AM
5/5 ############################## 100% 2s/tick ETA:Nov 27, 2020 12:31 AM
```

## Tests

```bash
$ npm test
```

## Contributing

Contributions, requests or pull requests are welcome & appreciated!

Send [me](https://github.com/bertolo1988/) an email if you have questions regarding possible contributions.

## License

  [MIT](LICENSE)
