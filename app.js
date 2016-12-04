
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(9000);

app.use(express.static(__dirname + '/static'));

//write router here
app.get('/patient', function(req, res) {
    res.sendfile(__dirname + '/patient.html');
});
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/signin.html');
});
app.get('/signinstaff', function(req, res) {
    res.sendfile(__dirname + '/public/signinStaff.html');
});
app.get('/forgetpassword', function(req, res) {
    res.sendfile(__dirname + '/public/forgetpassword.html');
});
app.get('/forgetpasswordstuff', function(req, res) {
    res.sendfile(__dirname + '/public/forgetpasswordstuff.html');
});
//patient
app.get('/patient/makeappt', function(req, res) {
    res.sendfile(__dirname + '/public/patient/makeappt.html');
});

app.get('/patient/viewappt', function(req, res) {
    res.sendfile(__dirname + '/public/patient/viewappt.html');
});

app.get('/patient/personalinfo', function(req, res) {
    res.sendfile(__dirname + '/public/patient/personalinfo.html');
});

app.get('/patient/dispensation', function(req, res) {
    res.sendfile(__dirname + '/public/patient/dispensation.html');
});

//doctor
app.get('/doctor/makeappt', function(req, res) {
    res.sendfile(__dirname + '/public/doctor/makeappt.html');
});

app.get('/doctor/viewappt', function(req, res) {
    res.sendfile(__dirname + '/public/doctor/viewappt.html');
});

app.get('/doctor/roundtimetable', function(req, res) {
    res.sendfile(__dirname + '/public/doctor/roundtimetable.html');
});

app.get('/doctor/healthrecord', function(req, res) {
    res.sendfile(__dirname + '/public/doctor/healthrecord.html');
});

//pharmacist
app.get('/pharmacist/viewdispensation', function(req, res) {
    res.sendfile(__dirname + '/public/pharmacist/viewdispensation.html');
});

//admin
app.get('/admin/addstaff', function(req, res) {
    res.sendfile(__dirname + '/public/admin/addstaff.html');
});

io.sockets.on('connection', function(socket) {
    socket.on('send message', function(data) {
        io.sockets.emit('new message', data);
    });
});

console.log('hello');
