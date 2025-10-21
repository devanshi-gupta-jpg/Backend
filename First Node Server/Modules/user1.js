const http =require('http');
const fs = require('fs');
const reqHandler = (req,res) => {
    //console.log(req);
    console.log(req.url, req.method);

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

    } else if(res.url === "/submit-details" && req.method =="POST"){
        const body = [];

        //on means the request will listen if data will come and then callback of the function chunk will happen
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end",()=>{
            const Fullbody = Buffer.concat(body).toString(); //Buffer.concat add up all the data and provide the final output
            console.log(Fullbody);
            const params = new URLSearchParams(parseBody);
            //const bodyObject = { };
            // for(const [key,val] of params.entries()){
            //     bodyObject[key] = val;
            // }
            const bodyObject = Object.fromEntries(params); //doing the same work by this one line above
            console.log(bodyObject);
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
        });
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>content</title></head>');
    res.write('<body>helllo everyone</body>');
    res.write('</html>');
    res.end();
}

module.exports = reqHandler;
