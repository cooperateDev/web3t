require! {
    \./providers/eth.ls
    \./providers/insight.ls
    \./providers/xem.ls
    \./providers/ripple.ls
    \./providers/erc20.ls
    \./providers/omni.ls
}
extend-providers = (providers, config)->
    return if typeof! config.providers isnt \Object
    providers <<<< config.providers
module.exports = (config, cb)->
   def = { eth, insight, xem, ripple, erc20, omni }
   extend-providers def, config
   cb null, def