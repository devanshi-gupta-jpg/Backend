const fs = require('fs');

fs.writeFile("output.txt","writng file", (err) => {
    if (err) console.log("Error occured");
    else console.log('file written successfully');
})
console.log("kg coding");