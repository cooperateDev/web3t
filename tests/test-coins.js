// Generated by LiveScript 1.6.0
(function(){
  var types, testCoin, testCoins, slice$ = [].slice;
  types = require('./types.ls');
  testCoin = require('./test-coin.ls');
  testCoins = function(arg$, web3t, cb){
    var type, types, coin;
    type = arg$[0], types = slice$.call(arg$, 1);
    if (type == null) {
      return cb(null);
    }
    coin = web3t[type];
    if (coin == null) {
      return cb("Type Not Found");
    }
    return testCoin(type, coin, function(err, data){
      if (err != null) {
        return cb(err);
      }
      return testCoins(types, web3t, function(err, coins){
        if (err != null) {
          return cb(err);
        }
        return cb(null, data);
      });
    });
  };
  module.exports = function(web3t, cb){
    return testCoins(types, web3t, cb);
  };
}).call(this);