const http =require('http');

function requestListener(req,res){
    console.log(hello);
}

const server = http.createServer(requestListener);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});



