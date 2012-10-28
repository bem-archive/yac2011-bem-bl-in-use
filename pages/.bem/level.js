var extend = require('bem/lib/util').extend,
    PATH = require('path'),

    BEM_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';

exports.getTechs = function() {

    return {
        'bemjson.js': './techs/bemjson.js.js',
        'js': 'js-i',
        'bemhtml': PATH.join(BEM_TECHS, 'bemhtml.js'),
        'html': PATH.join(BEM_TECHS, 'html.js')
    };

};

exports.getConfig = function() {

    return extend({}, this.__base() || {}, {

        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../blocks'
        ])

    });

};