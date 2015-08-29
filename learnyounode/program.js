/* BABYSTEPS */

// var sum = 0;
// var numbers = process.argv.slice(2);

// numbers.forEach(function(num) {
//     sum += parseInt(num);
// });

// console.log(sum);


/* MY FIRST I/) */

// var fs = require('fs');

// var string   = fs.readFileSync(process.argv[2]).toString();
// var split    = string.split('\n');

// console.log(split.length - 1);


/* MY FIRST ASYNC I/O */

// var fs = require('fs');

// fs.readFile(process.argv[2], function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString().split('\n').length - 1);
//     }
// });


/* FILTERED LS */

// var fs   = require('fs');
// var path = require('path');

// var dirname = process.argv[2];
// var ext     = process.argv[3];

// fs.readdir(dirname, function(err, list) {
//     if (err) {
//         console.log(err);
//     } else {
//         list.forEach(function(file) {
//             if (path.extname(file) === '.' + ext) {
//                 console.log(file);
//             }
//         });
//     }
// });


/* MAKE IT MODULAR */

// var filterFiles = require('./mymodule.js');

// var dirname = process.argv[2];
// var ext     = process.argv[3];

// filterFiles(dirname, ext, function(err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         res.forEach(function(file) {
//             console.log(file);
//         })
//     }
// });


/* HTTP CLIENT */

// var http = require('http');

// http.get(process.argv[2], function(res) {
//     res.setEncoding('utf8');

//     res.on('data', function(data) {
//         console.log(data);
//     });
// });


/* HTTP COLLECT */

// var http = require('http');
// var bl   = require('bl');

// http.get(process.argv[2], function(res) {
//     res.setEncoding('utf8');

//     res.pipe(bl(function(err, data) {
//         if (err) {
//             console.log(err.toString());
//         } else {
//             console.log(data.toString().length);
//             console.log(data.toString());
//         }
//     }));
// });


/* JUGGLING ASYNC */

// var http = require('http');
// var bl   = require('bl');

// var urls      = process.argv.slice(2);
// var completed = 0;
// var responses = [];

// var printResponse = function() {
//     if (completed === urls.length) {
//         responses.forEach(function(response) {
//             console.log(response);
//         })
//     }
// }

// urls.forEach(function(url, index) {
//     http.get(url, function(res) {
//         res.pipe(bl(function(err, data) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 responses[index] = data.toString();
//                 completed++;
//                 printResponse();
//             }
//         }));
//     });
// });


/* TIME SERVER */

// var net = require('net');

// var zeroPad = function(time) {
//     if (time.length < 2) {
//         time = '0' + time;
//     }
//     return time;
// }

// var now        = new Date();
// var year       = now.getFullYear();
// var month      = zeroPad((now.getMonth() + 1).toString());
// var day        = zeroPad(now.getDate().toString());
// var hour       = zeroPad(now.getHours().toString());
// var minutes    = zeroPad(now.getMinutes().toString());
// var dateString = year + '-' + month + '-' + day + ' ' +
//     hour + ':' + minutes + '\n';

// var server = net.createServer(function(socket) {
//     socket.end(dateString);
// });
// server.listen(process.argv[2]);


/* HTTP FILE SERVER */

// var http = require('http');
// var fs   = require('fs');

// var filePath = process.argv[3];

// var server = http.createServer(function(req, res) {
//     var src = fs.createReadStream(filePath);

//     src.pipe(res);
// });

// server.listen(process.argv[2]);


/* HTTP UPPERCASER */

// var http = require('http');
// var map  = require('through2-map');

// var server = http.createServer(function(req, res) {
//   req.pipe(map(function(chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res);
// });

// server.listen(process.argv[2]);

/* HTTP JSON SERVER */

// var http = require('http');
// var url  = require('url');

// function parsetime (time) {
//     return {
//         hour:   time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//     };
// }

// function unixtime (time) {
//     return {
//         unixtime: time.getTime()
//     };
// }

// var server = http.createServer(function (req, res) {
//     var parsedUrl = url.parse(req.url, true);
//     var time      = new Date(parsedUrl.query.iso);
//     var result;

//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time);
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time);
//     }

//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(result));
//     } else {
//         res.writeHead(404);
//         res.end();
//     }
// });
// server.listen(Number(process.argv[2]));