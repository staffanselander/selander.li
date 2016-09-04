require('dotenv').config();

var path = require('path');

module.exports = {

    generateEnv: function() {
        return Object.assign({}, process.env, {
            HMR: this.processFlag('hot')
        });
    },

    root: function(arguments) {
        argument = Array.prototype.slice.call(arguments, 0);

        return path.join.apply(path, [path.resolve(__dirname, '..')].concat(arguments))
    },

    processFlag: function(flag) {
        return process.argv.join('').indexOf(flag) > -1;
    },

    makeUndestandableObject: function(object) {
        var env = {};

        for (var key in object) {
            env['process.env.' + key] = JSON.stringify(object[key]);
        }

        return env;
    }
}