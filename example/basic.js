var meld = require('..');
var fs = require('fs');

var file = fs.createWriteStream('new-smb.nes');

meld('smb.nes', 'new-smb.chr', function (err, data) {
    if (!err) {
        file.write(data);
    }
});
