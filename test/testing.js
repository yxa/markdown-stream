var MarkdownStream  = require('../markdown-stream'),
    fs              = require('fs');

fs.stat('test.text', function (err, stats) {
  var fstream = fs.createReadStream('test.text',{bufferSize: stats.size});
  var parser = new MarkdownStream();
  var outstream = fs.createWriteStream("test.html");
  fstream.pipe(parser).pipe(outstream);
});


