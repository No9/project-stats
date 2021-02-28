# project-stats
A script to pull stats from github projects

## usage

```bash
# Clone this repo 
$ git clone https://github.com/no9/project-stats

# Change into the repo
$ cd project-stats

# Make an output dir and change into it
$ mkdir output && cd output

# Get contribution stats 
# $ npm run <project array>
$ node ../read.js '["no9/project-stats"]'
# process downloaded file
$ node ../read.js
project-stats,no9,1
```
