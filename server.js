

let http = require('http');

let httpd=http.createServer(function (request,response) {
    console.log('브라우저로 부터 요청을 받았습니다.');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello world</h1>');
});

httpd.listen(8088,function () {
    console.log('aaaaaa');
})