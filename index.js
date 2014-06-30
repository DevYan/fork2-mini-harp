module.exports = function(){
  var createMiniHarp = require("connect")
  , app = createMiniHarp();

  var parseArgs = require('minimist');
  var argv = require('minimist')(process.argv.slice(2));
  var port = argv.port||4000;


  console.log("Starting mini-harp on http://localhost:" + port);
  app
    .use(function (request, response,next) {
      var url = request.url.split("/");
      if(url[1]=="current-time"){
        response.end((new Date()).toISOString()+ "\n");
      }else{
        next();
      }
    })
    .use(function (request, response) {
      response.end("Cannot get \n");      
    })
    .listen(port);
}
