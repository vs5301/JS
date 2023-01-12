var fs = require('fs');

var msg = fs.readFileSync('readMe.txt', 'utf-8') 
console.log("Message in readMe.txt is "+ msg)

var writeMe = fs.readFileSync('writeMe.txt', 'utf-8')
console.log("Initial message in writeMe.txt is "+ writeMe)

fs.readFile('readMe.txt', 'utf-8', function(err, msg) 
{
  
    if( !err )
        fs.writeFile('writeMe.txt', msg, (err)=>{
            if( err ) {
                throw err;
            }
        });
    else
        throw err;
})

var readMe = fs.readFileSync('writeMe.txt', 'utf-8')
console.log("New text in writeMe.txt is "+ readMe)