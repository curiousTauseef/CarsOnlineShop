var fs = require('fs'),
  pathLib = require('path');
var FILES_DIR = __dirname + '/../../public/files';

module.exports = {
  createDir: function(path, dirName) {
    dirName = dirName || '';
    fs.mkdirSync(pathLib.normalize(FILES_DIR + path + dirName));
  },
  saveFile: function(file, path, fileName) {
    if (!fs.existsSync(pathLib.normalize(FILES_DIR + path))) {
      this.createDir(path);
    }

    var fsStream = fs.createWriteStream(pathLib.normalize(FILES_DIR + path + fileName));
    file.pipe(fsStream);
  },
  deleteFile: function(fileName) {
    var filename = pathLib.join(FILES_DIR, fileName);
    fs.unlinkSync(filename);
  }
};
