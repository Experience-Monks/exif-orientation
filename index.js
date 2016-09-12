'use strict';
var EXIF = require('exif-js');
var orientations = [
  { scale: {x: 1, y: 1}, rotate: 0 },
  { scale: {x: 1, y: 1}, rotate: 0 },
  { scale: {x: -1, y: 1}, rotate: 0 },
  { scale: {x: 1, y: 1}, rotate: 180 },
  { scale: {x: 1, y: -1}, rotate: 0 },
  { scale: {x: -1, y: 1}, rotate: 90 },
  { scale: {x: 1, y: 1}, rotate: 90 },
  { scale: {x: -1, y: 1}, rotate: -90 },
  { scale: {x: 1, y: 1}, rotate: -90 }
];
module.exports = function(file,cb) {
  if (file && typeof cb === 'function') {
    var r = new FileReader();
    r.onload = function(e) {
      var exif = EXIF.readFromBinaryFile(e.target.result);
      var val = exif.Orientation || 0;
      var orientation = orientations[val];
      if (orientation) {
        orientation.exif = val;
        cb(undefined,orientation);
      } else {
        cb(new Error('Could not find EXIF Orientation.'));
      }
    };
    r.onerror = function(e) {
      cb(new Error('Could not read file.'));
    };
    r.readAsArrayBuffer(file);
  }
};