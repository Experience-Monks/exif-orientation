# exif-orientation

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Returns the exif orientation in scale / rotation from a file object

## Install

```sh
npm install exif-orientation --save
```

## Example

The following example reacts to the `onChange` event of a file upload html input

```js
var findOrientation = require('exif-orientation');

fileUpload.addEventListener('change',function(e) {
  var file = e.target.files[0];
  findOrientation(file,function(err,orientation) {
    if (!err) {
      console.log(orientation); // displays {scale: {x: 1, y: 1}, rotation: 90}
    }
  });
});
```

## Usage

[![NPM](https://nodei.co/npm/exif-orientation.png)](https://www.npmjs.com/package/exif-orientation)

#### `findOrientation(file,callback)`

```file``` A file object from a file upload html input  
```callback``` A function to be called once the orientation data is found or an error occured. The callback is passed 2 arguments `(err,orientation)`. If `err` is undefined, orientation will contain the orientation data, otherwise err will be an `Error` object with the message of the error.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/exif-orientation/blob/master/LICENSE.md) for details.
