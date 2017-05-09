const argv = require('yargs').argv;

const Client = require('./client.js');
const nodeConfig = require('../client-config.json');

let jobPath = argv.job;
if (!jobPath) {
    throw new Error ('Missing job config');
} else {
    if (jobPath[0] !== '/') {
        jobPath = process.env.PWD + '/' + jobPath;
    }
    const workflow = require(jobPath); // Hardcoded workflow for now
    var client = new Client(nodeConfig, workflow);
    client.start();
}
