// Generated by LiveScript 1.6.0
(function(){
  var eth, insight, erc20, omni, velas2, extendProviders, toString$ = {}.toString;
  eth = require('./providers/eth.js');
  insight = require('./providers/insight.js');
  erc20 = require('./providers/erc20.js');
  omni = require('./providers/omni.js');
  velas2 = require('./providers/velas2.js');
  extendProviders = function(providers, config){
    if (toString$.call(config.providers).slice(8, -1) !== 'Object') {
      return;
    }
    return importAll$(providers, config.providers);
  };
  module.exports = function(config, cb){
    var def;
    def = {
      eth: eth,
      insight: insight,
      erc20: erc20,
      omni: omni,
      velas2: velas2
    };
    extendProviders(def, config);
    return cb(null, def);
  };
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
