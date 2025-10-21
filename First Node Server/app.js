const http =require('http');
const reqHandler = require('../user1');

function requestListener(req,res){
    //console.log(req);
    console.log(req.url, req.method, req.headers);

    if(req.url === '/'){ //come to home page
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>content</title></head>');
        res.write('<body><h1>Enter your Details<h1></body>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name/"></br>');
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" name="gender" value="male"/>');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" name="gender" value="female"/>');
        res.write('<br> <input type="submit" value="Submit"/>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); //return is used to come out of the function
    } else if(req.url === '/product'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>content</title></head>');
        res.write('<body>helllo everyone</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>content</title></head>');
    res.write('<body>helllo everyone</body>');
    res.write('</html>');
    res.end();
// This method is used to set an HTTP header in the response.

// HTTP headers carry information about the data being sent, such as what kind of content it is, cache settings, cookies, etc.

// 'Content-Type'

// This specific header tells the browser what kind of data the server is sending back.

// It helps the browser know how to interpret or display the response.

// 'text/html'

// This is the value of the header.

// It means “the content you’re receiving is HTML text”.

// So the browser will render it as a webpage, not as plain text or some other type.
    
//process.exit(); //stops the event loop 
}
//this server return the object
//const server = http.createServer(requestListener); //not calling the function but passing the reference of the function wich creates the server.
//http.createServer((req,res) => { console.log(req) }); //anonymous function
//http.createServer(function(req,res){ console.log(req)}); //also anonymous function
//server.listen(3000); //3000 is port.

const server = http.createServer(reqHandler);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});

