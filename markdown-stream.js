var util      = require('util'),
    Transform = require('stream').Transform,
    md        = require("node-markdown").Markdown;

function MarkdownStream(options) {
  if (!(this instanceof MarkdownStream))
    return new MarkdownStream(options);

  Transform.call(this,options);
}

MarkdownStream.prototype = Object.create(
  Transform.prototype, { constructor: { value: MarkdownStream }});


MarkdownStream.prototype._transform = function(chunk, encoding, done) {
  chunk = chunk.toString();
  this._translate(chunk);
  done();
};


MarkdownStream.prototype._translate = function(chunk) {
  this.push(md(chunk));
};

module.exports = MarkdownStream;
