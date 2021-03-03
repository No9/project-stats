# project-stats
Scripts to pull and visualize contributor stats from github projects

## report

The report page is public/index.html and needs to be hosted in a webserver.
```
$ git clone https://github.com/no9/project-stats
$ cd project-stats/public
$ npm install http-server -g
$ http-server .
# browse to http://localhost:8080/index.html
```

## batch

```bash
# Clone this repo 
$ git clone https://github.com/no9/project-stats

# Change into the repo
$ cd project-stats/batch

# Make an output dir and change into it
$ mkdir output && cd output

# Get contribution stats 
# $ npm run <project array>
$ node ../read.js '["no9/project-stats"]'
# process downloaded file
$ node ../read.js
project-stats,no9,1
```
