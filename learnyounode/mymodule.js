var fs   = require('fs');
var path = require('path');

var filterFiles = function(dirname, ext, callback) {
    var files = [];
    fs.readdir(dirname, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            list.forEach(function(file) {
                if (path.extname(file) === '.' + ext) {
                    files.push(file);
                }
            });
            return callback(null, files);
        }
    });
}

module.exports = filterFiles;