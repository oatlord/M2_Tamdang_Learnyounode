const http = require('http');
const url = require('url');
const port = process.argv[2];

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    }
}

function parseQuery(reqUrl) {
    switch (reqUrl.pathname) {
        case "/api/parsetime":
            return parseTime(new Date(reqUrl.query.iso));
        case '/api/unixtime':
            return unixTime(new Date(reqUrl.query.iso));
    }
}

http.createServer(function (req,res) {
    if (req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let reqUrl = url.parse(req.url,true);
        res.end(JSON.stringify(parseQuery(reqUrl)));
    } else {
        res.writeHead(405);
        res.end();
    }
}).listen(port)



