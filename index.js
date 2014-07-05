var fs = require('fs');
var ns = require('nesly-split');

module.exports = function (file, newChr, cb) {

    if (!file || !newChr) {
        cb(new Error("`file` and `newChr` are required"));
    }

    ns(file, function (err, data) {
        var rom = data.rom;
        var chr = data.chr;
        var size = data.chrSize;
        var start = data.chrStart;

        var oldChr = rom.slice(start, size);
        oldChr = newChr;

        cb(null, rom);
    });
};
