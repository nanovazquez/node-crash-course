# Class 2: Web app development - Exercise: Let's JS all the things!

In this class you will learn how to serve HTML static pages from a node web server. In addition, we will start writing some client-side code to turn our that static page in something more interesting. Finally, as always, we will deploy our newly created app.

Alternatively, you can skip the app creation steps and deploy the app under the `tinder` folder and go directly to the deployment section.

### Section 1: Your fist web app (static content)

1. Start by navigating to the `my-first-app` folder you created in the first class (under _../exercise-1_). Then, go to the **app.js** file.

1. Update the code with the following lines:

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

  We are doing 2 new things in this code:

  * We serve all (static) files inside the `/public` folder
  * When the website is being requested (`app.get('/')`), we return the index.html file

  Also, notice that we are using a different library this time named [Express](http://expressjs.com/). This is one of the most famous and used web application for Node.js and provides most of the things you will need today (and probably the next few months) out of the box. But before using it, you need to download it from NPM. For that, execute `npm install --save express`.

1. Now that our server knows how to send static content, we need to place the content itself. For that, create a new folder named **public** and copy the following files *./assets/index.html* and *./assets/index.css*.

1. Then, replace the content of the file with the text inside the _./assets/app.js_ file.

1. Execute that code by using `node app.js`. Open a browser and navigate to http://127.0.0.1:8000/ to test it. You should see a tinder-ish app in your browser: it will show some pictures, a cellphone, but the buttons won't work. For that, let's go to the next section.

### Section 2: Your fist web app (dynamic content)

Now, it's time to add some functionality to the app! For this, we will remove the static HTML file and re-create it using JavaScript. For this, follow these steps:

1. Remove the static code inside the `<div id="people">` tag, but leave the tag! We are going to populate it with JS code.

1. Now, add the following line inside the `<head>` tag of the **index.html** file.

  ```
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  ```

1. Create a file named `index.js` under the **public** folder and paste the content inside the `./assets/public/index.js` file.

1. Now execute that code by using `node app.js`. Open a browser and navigate to http://127.0.0.1:8000/ to test it. You should see a better tinder-ish site in your browser.

  *Voilà!* Easy right? Let's analize what the app does:

  * We create a variable to store all the information of the people we are going to use.
  * We initialize an `App` and `Phone` variables, with some actions, like **Yes** or **No**.
  * We initialize the app inside the `$(document).ready()` function. Notice that we add randomly people to the deck.

### Section 3: Get your data from an API

TBC

### Section 4: Deployment

TBC


