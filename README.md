# progress-bar

A simple textual progress bar.


## Installing

`$ npm install progress-bar`


## Usage

Only 2 methods are exported, `init` and `tick`.

Set the total amount of ticks with `init` and to increase the progress just call `tick`.

The time estimation is calculated using the time between ticks.

For further instructions check `demo.js`.


## Demo output example

	1/20 [#------------------------] 5% 0s/tick ETA:19:40:54
	2/20 [##-----------------------] 10% 0s/tick ETA:19:40:55
	3/20 [###----------------------] 15% 0s/tick ETA:19:40:56
	4/20 [#####--------------------] 20% 0s/tick ETA:19:40:56	
	5/20 [######-------------------] 25% 0s/tick ETA:19:40:57
	6/20 [#######------------------] 30% 0s/tick ETA:19:40:57
	7/20 [########-----------------] 35% 0s/tick ETA:19:40:57
	8/20 [##########---------------] 40% 0s/tick ETA:19:40:57
	9/20 [###########--------------] 45% 0s/tick ETA:19:40:57
	10/20 [############-------------] 50% 0s/tick ETA:19:40:57
	11/20 [#############------------] 55% 0s/tick ETA:19:40:57
	12/20 [###############----------] 60% 0s/tick ETA:19:40:57
	13/20 [################---------] 65% 0s/tick ETA:19:40:57
	14/20 [#################--------] 70% 0s/tick ETA:19:40:57
	15/20 [##################-------] 75% 0s/tick ETA:19:40:57
	16/20 [####################-----] 80% 0s/tick ETA:19:40:57
	17/20 [#####################----] 85% 0s/tick ETA:19:40:57
	18/20 [######################---] 90% 0s/tick ETA:19:40:57
	19/20 [#######################--] 95% 0s/tick ETA:19:40:57
	20/20 [#########################] 100% 0s/tick ETA:19:40:57


## Tests

`$ npm test`


## Contributing

Contributions, requests or pull requests are welcome & appreciated!

Send [me](https://github.com/bertolo1988/) an email if you have questions regarding possible contributions.