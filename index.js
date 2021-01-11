var exec = require('node-ssh-exec');

var config = {
        host: 'localhost',
        port: '00',
        username: 'root',
        password: 'root'
    },
    command = 'ls';

exec(config, command, function (error, response) {
    if (error) {
        throw error;
    }

    console.log(response);
});