"use strict";

require('dotenv').config();

const WebpackConfig = require('webpack-config');

const defaultConfiguration = require('./config/webpack/default');

var selectedConfiguration;

switch (process.env.ENV) {

    case 'production': 
            selectedConfiguration = require('./config/webpack/production');
        break;

    case 'development':
            selectedConfiguration = require('./config/webpack/development');
        break;
    
    default:
        selectedConfiguration = require('./config/webpack/development');
}

module.exports = selectedConfiguration;