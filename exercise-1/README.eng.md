> **Note:** these are the instructions for the English version. If you want to see the instructions in spanish, go [here](./README.md).

# Course 1: Node.js introduction & ecosystem - Exercise: Your first node deployment!

Welcome! Follow these instructions to create your first node app step by step and deploy it to the cloud.
Alternatively, you can skip the app creation steps (first section) and and go directly to the Deployment section. Use the app under the `my-first-app` folder for this.

### Section 1: Your fist node app

1. Open a terminal and create a folder for your app by running `mkdir my-first-app`. Then, navigate to that folder via `cd my-first-app`.

1. Initialize your project by running `npm init`. Answer the prompted questions (or press _enter_ to use the default value), but make sure you set up `app.js` as your main app. [npm](https://docs.npmjs.com/cli/init) will use that information to create a `package.json` file for you.

1. Now you are ready to create your Node.js app! For this, create a file named **app.js** by entering `touch app.js` (or `echo.>app.js` if you are on Windows).

1. Then, open your file and add the following code:

  ```
  var http = require('http');

  var app = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hola FIUBA!');
    response.end();
  });

  var port = process.env.PORT || 8000;
  app.listen(port);
  console.log('Server running at http://127.0.0.1:' + port);
  ```

  > **Note:** this code will, when executed, create a basic Node.js server that will answer 'Hola FIUBA' to every request made to the localhost (your machine) port 8000.

1. Now execute the code by running `node app.js` in the terminal. Open a browser and navigate to http://127.0.0.1:8000/ to test it. You should see the message `Hola FIUBA!`, sent by our Node.js app to your browser.

#### Introducing NPM

One of the most useful tools we have in the JavaScript world is [NPM](https://www.npmjs.com/), the package manager for JS code. You can use it to reuse code created by the community, by downloading ~350.000 packages of working code. Every piece of code that can be reused across different applications, *could* be distributed as an NPM package.

Let's install a simple package to improve our newly created server a little bit.

1. Add the [sign-bunny](https://github.com/ryanbahniuk/sign-bunny) package in your app by running `npm install --save sign-bunny`. Notice that a **node_modules** folder will be created containing the package code.

  > **Note:** the code is also available in [GitHub](https://github.com/ryanbahniuk/sign-bunny).

1. Now, update your `app.js` code to use the package. There are 2 important steps you need to know for this:

  1. You need to **require** the package so node can know that it needs to load it.
  1. You need to use the package (or module) code in your app.

  Simple, right? Let's do it:

  ```
  var http = require('http');
  var signBunny = require('sign-bunny');

  var app = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.write(signBunny('Hola FIUBA!'));
    response.end();
  });

  var port = process.env.PORT || 8000;
  app.listen(port);
  console.log('Server running at http://127.0.0.1:' + port);
  ```

1. Run the app again with `node app.js`. Now your app should be returning something different to the browser. And your only job was to orchestrate in your server the use of the module's logic, not the implementation of the logic.

In the next section, we will deploy our app to the cloud.

### Section 2: Deploy your app in the Cloud

For this section we are going to use one of the following services:

* [now](https://zeit.co/now)
* [Heroku](https://www.heroku.com/)

Feel free to use whatever service you want. But, notice that you will need to update your `package.json` file, specifying how your app should start:

```
{
  "name": "exercise-1",
  ...
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  ...
}
```

#### Deploy a node app in now.js

> **Note:** you can find a more detailed step-by-step guide [here](https://zeit.co/now#get-started).

1. Install now from npm with `npm install -g now`.

1. To deploy with now, simply run `now`. The first time you run it it'll ask for your email to identify you.
Click the email you receive, and you'll be automatically logged-in.

#### Deploy a node app in Heroku

> **Note:** you can find a more detailed step-by-step guide [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

1. Install the [Heroku toolbelt](https://toolbelt.heroku.com/), the CLI tool for creating and managing Heroku apps.

1. Once installed, open a terminal and log in to Heroku with the following command: `heroku login`.

1. Navigate to the folder of the app you want to deploy. To prepare Heroku to receive your source code, create an app on Heroku with `heroku create`. This will associate your code with a git remote called `heroku`.

  >**Note:** if the `heroku` git remote wasn't created automatically, you can do it manually via `git remote add heroku <your-heroku-git-remote-url>.git`.

1. Now deploy your code with `git push heroku master`.

1. The application is now deployed. Ensure that at least one instance of the app is running with `heroku ps:scale web=1`. Finally, navigate to the app with `heroku open`.

### Optional Section: push your code to GitHub

[GitHub](https://github.com/) is a web-based Git repository hosting service. Is basically a code sharing and publishing service, but it's also a social networking site for programmers, and a reeally good place to find JavaScript project. You should definitely give it a try and start sharing your own code there, it's a good moment to be part of the open source community :)
