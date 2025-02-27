const port = process.argv[2];
const net = require('net');
const server = net.createServer(function (socket) {
    let dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = (dateObj.getMonth()+1).toString().padStart(2,"0");
    let day = dateObj.getDate();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();

    let fulldate = `${year}-${month}-${day} ${hour}:${minute}`;
    socket.end(fulldate+"\n");
})
server.listen(port);