var jest = require('jest-cli');

var runTest = function(testNamePattern) {
    var options = {
        projects: [__dirname],
        testResultsProcessor: "./node_modules/jest-json-repoter",
        testNamePattern: testNamePattern
    }

    jest.runCLI(options, options.projects)
        .finally(() => {
            console.log("Done running tests");
        });

}

exports.runTest = runTest;