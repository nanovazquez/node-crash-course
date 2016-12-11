> **Note:** these are the instructions for the English version. If you want to see the instructions in spanish, go [here](./README.md).

# Class 2: Web app development - Exercise: Let's JS all the things!

In this class you will learn how to serve HTML static pages from a Node web server. In addition, we will start writing some client-side code to turn our that static page in something more interesting. Finally, as always, we will deploy our newly created app in the cloud.

Alternatively, you can skip the app creation steps and deploy the app under the `tinder` folder. If you want to do that, you can go directly to the deployment section.

### Section 1: Your fist web app (static content)

1. Start by navigating to the `my-first-app` folder you created in the first class (under the _../exercise-1_ folder). Then, open to the **app.js** file.

1. Update the code within that file with the following lines:

  ```
  var express = require('express');
  var app = express();

  app.use(express.static(__dirname + '/public'));

  app.get('/', function(req, res){
    res.sendfile(__dirname + 'public/index.html');
  });

  var port = process.env.PORT || 8000;
  app.listen(port);
  console.log('Server running at http://127.0.0.1:' + port);
  ```

  Let's analyze the code we just wrote. Notice that we are doing 2 new things:

  * In the third line, we tell our web server to serve all files found inside the `/public` folder.
  * In the next line, we tell our web server that when someone navigates to our website (`app.get('/')`), it should return the **index.html** file.

  Also, notice that we are using a different library this time named [Express](http://expressjs.com/). This is one of the most famous and used web application for Node.js and provides most of the things you will need today (and probably the next few months) out of the box. But before using it, you need to install it in our app from NPM. For that, execute `npm install --save express`.

1. Now that our server knows how to send static content to the browsers, we just need to place the proper files inside the proper folders. For that, create a new folder named **public** and copy the files *./assets/index.html* and *./assets/index.css* inside the folder.

1. Execute that code by running `node app.js`  in the terminal. Open a browser and navigate to http://127.0.0.1:8000/ to test it. You should see a tinder-ish app in your browser: it will show some pictures, a cellphone, but the buttons won't work. For that, let's go to the next section.

### Section 2: Your fist web app (dynamic content)

Now, it's time to add some functionality to the app! For this, we will remove the static HTML file and re-create it using JavaScript in the client. For this, follow these steps:

1. Open the **index.html** file of your app (inside the **public** folder).

1. Remove the static code inside the `<div id="people">` tag, but leave the tag! We are going to populate it with JS code.

1. Now, add the following line inside the `<head>` tag (at the top of the file):

  ```
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  ```

1. Create a file named `index.js` under the **public** folder and paste the content inside the **./assets/public/index.js** file.

1. Now let's run our server by running `node app.js` in the terminal. Then, open a browser and navigate again to http://127.0.0.1:8000/ to validate the result. You should see a better tinder-ish site in your browser.

  *Voilà!* Easy right? Let's analize what the app does:

  * We create a variable to store all the information of the people we are going to use.
  * We initialize an `App` and `Phone` variables, with some actions, like **Yes** or **No**.
  * We initialize the app inside the `$(document).ready()` function. Notice that we add randomly people to the deck.

### Section 3: Get your data from an API

TBC

### Section 4: Deployment

TBC


