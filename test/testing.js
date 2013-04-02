var MarkdownStream  = require('./markdown-stream'),
    fs              = require('fs');

var fileSize = 0;
fs.stat('test.text', function (err, stats) {
 console.log(stats.size);
stats.size = fileSize;
});

var fstream = fs.createReadStream('test.text',{bufferSize: fileSize});
console.dir(fstream);
var parser = new MarkdownStream();
var outstream = fs.createWriteStream("test.html");

// now pump some data into it (and pipe it somewhere else)
fstream.pipe(parser).pipe(outstream);
