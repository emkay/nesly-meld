var through = require('through');
var fs = require('fs');

var chr = fs.createReadStream('smb.chr');
var rom = fs.createWriteStream('smb.nes');

function write(chunk) {}

chr.pipe(through(write, end));
