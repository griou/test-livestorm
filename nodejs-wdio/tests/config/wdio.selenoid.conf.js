const wdioConf = require("./wdio.conf");
const merge = require("deepmerge");

exports.config = merge(
  wdioConf.config,
  {
    hostname: "localhost",
    port: 4444,
    path: "/wd/hub",
  },
  { clone: false }
);

exports.config.capabilities = [
  {
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 5,
    "selenoid:options": {
      enableVNC: true,
      enableVideo: false,
    },
    //
    browserName: "chrome",
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
  },
];
