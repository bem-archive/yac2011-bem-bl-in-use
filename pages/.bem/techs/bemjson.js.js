var myPath = require('bem/lib/path'),
    Template = require('bem/lib/template');

exports.techModule = module;

exports.newFileContent = function (vars) {

    return Template.process([
        "({",
        "    block: 'b-page',",
        "    title: '{{bemBlockName}}',",
        "    head: [",
        "        { elem: 'css', url: '{{bemBlockName}}.css'},",
        "        { elem: 'css', url: '{{bemBlockName}}.ie.css', ie: 'lt IE 8'},",
        "        { block: 'i-jquery', elem: 'core'},",
        "        { elem: 'js', url:'{{bemBlockName}}.js'},",
        "    ],",
        "    content: [",
        "        'block content'",
        "    ]",
        "})"], vars);
};
