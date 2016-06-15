# Class 2: Web app development - Exercise: Let's JS all the things!

In this class you will learn how to serve HTML static pages from a node web server. In addition, we will start writing some client-side code to turn our that static page in something more interesting. Finally, as always, we will deploy our newly created app.


Alternatively, you can skip the app creation steps and deploy the app under the `tinder` folder and go directly to the deployment section.

### Section 1: Your fist web app (static content)

1. Start by navigating to the `my-first-app` folder you created in the first class (under _../exercise-1_). Then, go to the **app.js** file.

1. Copy the contents of the _./assets/index.html_ and _./assets/index.css_ file inside this folder.

1. Then, replace the content of the file with the text inside the _./assets/app.js_ file.

1. Notice that we are using a different library this time named **express**. Before running the server, you need to install it via `npm install --save express`.

1. Now execute that code by using `node app.js`. Open a browser and navigate to http://127.0.0.1:8000/ to test it. You should see a tinder-ish site in your browser.

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


