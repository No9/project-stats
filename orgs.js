// https://api.github.com/users/no9/orgs
const fs = require('fs');
const https = require('https');
var file = fs.readFileSync("./orgs/userstoorgs.json");
var data = JSON.parse(file);

function processuser(curproj, curuser) {
    var options = {
        host: 'api.github.com',
        path: '/users/' + curuser + '/orgs',
        headers: { 'User-Agent': 'Node.js/v14.15.3' }
    };
    // console.log(options)
    callback = function(response) {
        var str = '';
        //another chunk of data has been received, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });
    
        //the whole response has been received, so we just print it out here
        response.on('end', function () {
            var orgs = JSON.parse(str);
            for(var j = 0; j < orgs.length; j++) {
                if(orgs[j]) {
                    console.log(curproj + ',' + curuser + ',' + orgs[j].login + '\n');
                } 
                // else {
                //     console.log(curproj + " " + curuser + " " + orgs.length)
                // }
            }
        });
    }
    https.request(options, callback).end();
}
var interval = 1000;
for (const property in data) {
    
    for(i = 0; i < data[property].length;i++) {
     //console.log(property, data[property][i]);
       var project = property;
       var user = data[property][i];
       setTimeout(processuser, interval, project, user);
       interval += 3000;
    }
  }

