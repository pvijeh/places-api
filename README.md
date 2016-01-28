# What does this app do?

this is a REST API built using StrongLoop, LoopBack.js (which sits on top of Express.js) and PostgreSQL.  The api is build to interface with an Isomorphic React.js app which will ultimately be a local discovery web app for bars, lounges and nightclubs using a tag based voting system inspired by design patterns used in these sites (http://stackshare.io/, http://www.slant.co/, https://www.producthunt.com/, http://stackoverflow.com/) 


To do: 

- implement authentication using passport.js
- integrate with facebook login using passport.js facebook login strategy
- create and write rules to prevent user abuse or unwanted behavor (limiting to single vote per place / vote category, rate limiting, vote only enabled to logged in users) 
- add in google places place IDs so that data can be called on client side from google places api 


Install this on OSX:

1) install node.js & NPM
http://blog.teamtreehouse.com/install-node-js-npm-mac
* make sure node runs using the 'node' alias and not 'nodejs' otherwise strongloop / loopback won't work

2) install strongloop
https://docs.strongloop.com/display/SL/Installing+on+MacOS

3) clone this project and run npm install in root directory

4) make sure PostgreSQL is installed:
http://exponential.io/blog/2015/02/21/install-postgresql-on-mac-os-x-via-brew/

5) configure Postgres database and user name -- make sure to use same info in this config file:
server/datasources.json

6) run slc arc to start strongloop --- from the composer tab -- migrate each table to create a table in the postgres database

7) uncomment code in server/boot/createUser.js to create similated data,  run the app and then re-comment out this code to prevent it from running each time.  

Install this for deployment on Ubuntu using Strong-pm

https://docs.strongloop.com/display/SLC/Setting+up+a+production+host

