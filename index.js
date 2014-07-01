module.exports = function(root,port){
  var createMiniHarp = require("connect")
  , app = createMiniHarp(),serveStatic = require('serve-static');

  console.log("Starting mini-harp on http://localhost:" + port);
  app
    .use(serveStatic(root))
    .use(function (request, response,next) {
      var url = request.url.split("/");
      if(url[1]=="current-time"){
        response.end((new Date()).toISOString()+ "\n");
      }else{
        next();
      }
    })
    .use(function (request, response) {
      var url = request.url.split("/");
      response.end("Cannot get " + url[1]+ "\n");      
    })
    .listen(port);
}
