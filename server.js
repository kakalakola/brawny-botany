// server.js
// where your node app starts

const http=require("http")
      ,url=require('url')
      ;
var functionHttpRequestHandler
    ;
functionHttpRequestHandler=function(request,response){
  var strContentType={"Content-Type":"text/plain"}
      ,strOutput=''
      ;
  strOutput='{';

  //strOutput+='"ipaddress":"'+request.connection.remoteAddress;
  strOutput+='"ipaddress":"'+request.headers['x-forwarded-for'].split(',')[0];
  strOutput+='","language":"'+request.headers['accept-language'].split(',')[0];
  strOutput+='","software":"'+request.headers['user-agent'].split('(')[1].split(')')[0];

  strOutput+='"}';

  response.writeHead(200,strContentType);
  response.write(strOutput);
  response.end();
};

httpServer=http.createServer(functionHttpRequestHandler);
httpServer.listen(3000);
