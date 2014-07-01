var ns = require('nesly-split');
var fs = require('fs');

var Buffer = require('buffer').Buffer;


fs.open(__dirname + '/smb.nes', 'r', function (err, fd) {
    var buffer = new Buffer(8192);

    if (!err) {
        fs.read(fd, buffer, 0, 8192, 1024 * 8, function (err, bytesRead, buf) {
            console.log(err);
            console.log(bytesRead);
            console.log(buffer);
        });
    }
});
