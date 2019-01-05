var method = {};

method.init = function() {

    this.name = "TALib-port-tester";


    var TRIXSettings= {
        optInTimePeriod: 15,
    };

    var TTRIXSettings = {
        optInTimePeriod: 15
    };
    this.addIndicator('ind', 'DPO', TRIXSettings);
    this.addTulipIndicator("tulipind", "dpo", TTRIXSettings);
};


method.check = function() {};
method.update= function(candle) {

    var TRIX = this.indicators.ind.result;
    var TTRIX = this.tulipIndicators.tulipind.result;

	  console.log('TRIX>> ' + TRIX);
    console.log('TULIP TRIX>> ' + TTRIX['result']);
    console.log('\n');

};

method.log = function() {};

module.exports = method;