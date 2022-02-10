import 'dotenv/config'
import * as process from "process";

const timeout = process.env.DEBUG === 'true' ? 9999999 : 300000;

/**
 * Reporters
 **/
const testrail = require('wdio-wdiov5testrail-reporter/lib');
const slack = require('wdio-slack-service');
const {Reporter: reportPortal} = require('@reportportal/agent-js-webdriverio');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: [
        `./src/test/suits/*.ts`
    ],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: timeout,
    },
    reporters: [
        'spec',
        ['allure', {
            outputDir: './test-report/allure-result/',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }],
        [reportPortal, {
            token: process.env.RP_TOKEN,
            endpoint: 'http://localhost:8080/api/v1',
            project: 'demo-webdriverio-mocha',
            launch: 'Test1',
        }],
        ['wdiov5testrail', {
            domain: "nallikaea.testrail.io/",
            username: process.env.TR_USER,
            password: process.env.TR_PASSWORD,
            projectId: 1,
            useLatest: true
        }],
    ],
    services: [
        ['chromedriver'],
        [slack, {
            webHookUrl: process.env.SLACK_WEB_HOOK,
            notifyOnlyOnFailure: false,
            messageTitle: 'Webdriverio Slack Reporter',
        }]
    ],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },

    before() {
        browser.setWindowSize(1280, 720);
    },
    afterTest: function (test: any, context: any, {error}: any) {
        if (error) {
            browser.takeScreenshot();
        }
    },
    beforeSession: function () {
        testrail.startup();
    },
    onComplete: (exitCode: any, conf: any) => {
        testrail.cleanup(conf);
    },
};
