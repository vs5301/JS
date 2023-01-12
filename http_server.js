const http = require('http');
const port = 3000;

const server = http.createServer(function(req,res)
{
    res.write('Hello User');
    res.end(); 
})

server.listen(port,function(error)
{
    if(error)
    console.log(error);
    else 
    console.log('Server listening at port ' + port);
})
