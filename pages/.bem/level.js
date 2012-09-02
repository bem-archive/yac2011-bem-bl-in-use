var extend = require('bem/lib/util').extend,
    level = require('../../bem-bl/blocks-desktop/.bem/level.js');

for (var n in level) exports[n] = level[n];

exports.techs = function() {

    return extend(this.__base() || {}, {

        'bemjson.js': './techs/bemjson.js.js'

    });

};
