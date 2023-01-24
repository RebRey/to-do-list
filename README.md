# to-do-list
Stay organized and manage your day-to-day tasks with this to-do-list web app.

## Objective:
Create a to-do-list web app.

## Initial Set-Up:
1) Create the following files:
* index.html
* app.js
2) cd into the current project folder and initialize npm using the command line interface. This will create a package.json file.
```
  $ npm init
```

3) Install npm in the current project folder. This will create a package-lock.json file. 
```
  $ npm install
```

4) Use npm to install express in the current project folder. You can check that it is installed in the package.json file under dependencies. 
```
  $ npm install express
```

5) Use npm to install body-parser in the current project folder.You can check that it is installed in the package.json file under dependencies. 
```
  $ npm install body-parser
```

6) Use npm to install ejs in the current project folder. You can check that it is installed in the package.json file under dependencies. 
```
  $ npm install ejs
```

7) Create a folder called "views". This is where the view engine by default will go and look for the files that need rendering. 

8) Inside the views folder, create a file called "list.ejs". This will be the base template to create all of the to-do-lists.

## Methods Used:
* **getDay()** JavaScript method that returns the day of the week for the specified date according to local time, where 0 represents Sunday.
* **res.send()** Express.js method that can only be called once. It Sends the HTTP response.
* **res.write()** Node.js method that can be called multiple times. The first time res.write() is called, it will send the buffered header information and the first chunk of the body to the client. The second time res.write() is called, Node.js assumes data will be streamed, and sends the new data separately. That is, the response is buffered up to the first chunk of the body.
* **res.sendFile()** Express.js method that transfers the file at the given path. 

* **res.render** Express.js method that renders a view and sends the rendered HTML string to the client. 

## Lessons Learned
I learned how to:

** use Express.js to build a web application and a server.

* use Embedded JavaScript (EJS) templating to change certain parts of the HTML depending on the logic in my server.