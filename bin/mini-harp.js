#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var root = argv._[0]||process.cwd();// current directory
var port = argv.port||4000;

var result = require('../');
result(root,port);
