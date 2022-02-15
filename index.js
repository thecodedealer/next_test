const spawn = require('child_process').spawn;
const child = spawn('npm install && npm run build && npm run start', {
  shell: true
});
child.stderr.on('data', function (data) {
  console.error("STDERR:", data.toString());
});
child.stdout.on('data', function (data) {
  console.log("STDOUT:", data.toString());
});
child.on('exit', function (exitCode) {
  console.log("Child exited with code: " + exitCode);
});
