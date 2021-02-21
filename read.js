const path = require('path');
const fs = require('fs');

fs.readdir(__dirname, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        
        // Do whatever you want to do with the file
        if(file.indexOf('.json') > -1) {
            var data = fs.readFileSync(file);
            var project = file.replace('.json', '');
            var contribs = JSON.parse(data);
            for (var i=0; i < contribs.length; i++) {
                console.log(project + "," + contribs[i].author.login + "," + contribs[i].total);
            }
             
        }
    });
});