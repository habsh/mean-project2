const _ = require('lodash');

// module variables
const config = require('./config.json');
const defaultConfig = config.development;
const env = process.env.NODE_ENV || 'development';
const envconfig = config[env];
const finalconfig = _.merge(defaultConfig, envconfig);


global.gConfig = finalconfig;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(global.gConfig)}`);