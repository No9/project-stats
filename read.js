// https://api.github.com/repos/No9/harmon/contributors

const path = require('path');
const fs = require('fs');
const http = require('https');

var listarg = process.argv[2];
if (listarg) {
    var list = JSON.parse(listarg);
    if (Array.isArray(list)) {
        list.forEach(function (listitem) {
            var options = {
                host: 'api.github.com',
                path: '/repos/' + listitem + '/contributors',
                headers: { 'User-Agent': 'Node.js/v14.15.3' }
            };
            callback = function(response) {
                var str = '';
                //another chunk of data has been received, so append it to `str`
                response.on('data', function (chunk) {
                    str += chunk;
                });
            
                //the whole response has been received, so we just print it out here
                response.on('end', function () {
                    var filename = listitem.split('/')[1];
                    fs.writeFileSync(filename + '.json', str);
                    console.log(listitem + ' Done!');
                });
            }
            http.request(options, callback).end();
            
            //https://api.github.com/repos/No9/harmon/contributors
        });
        return console.log("Complete!");
    } else {
        return console.log('Unable to scan directory: ' + err);
    }
}

fs.readdir(process.cwd(), function (err, files) {
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
                console.log(project + "," + contribs[i].login + "," + contribs[i].contributions);
            }
             
        }
    });
});
