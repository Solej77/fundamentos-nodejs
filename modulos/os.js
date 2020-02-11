const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.constants);
console.log(gb(os.totalmem()));
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());

function kb (bytes) {
  return bytes / 1024
}

function mb (bytes) {
  return kb(bytes) / 1024
}

function gb (bytes) {
  return mb(bytes) / 1024
}