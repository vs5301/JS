const http = require('http');
const fs = require('fs');

const requestListener = (req, res)=>
{
	console.log("Request is Incoming");
	res.writeHead(200, 
	{
        'Content-Type': 'text/html'
    });

	var url = req.url

	if(url === '/json')
	{
		const msg = {title : 'json-response'};
		const jsonContent = JSON.stringify(msg);
		res.end(jsonContent);
	}
	else if(url === '/index.html')
	{
		fs.readFile('./index.html', null, function (error, data) {
			if (error) {
				res.writeHead(404);
				res.write('Whoops! File not found!');
			} else {
				res.write(data);
			}
			res.end();
		});
	}
	else 
	{
			res.write('simple-response'); 
			res.end(); 
	}
};

const server = http.createServer(requestListener);

server.listen(3000,'localhost', function()
{
	console.log("Server is Listening at Port 3000!");
});