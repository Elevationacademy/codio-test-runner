#!/usr/bin/env node
var testRunner = require('../index');

var args = process.argv.splice(process.execArgv.length + 2);

testRunner.runTest(args[0]);