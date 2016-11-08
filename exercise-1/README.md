# Clase 1: Introducción a Node.js y su ecosystem - Ejercicio: Tu primer deployment de Node!

Bienvenido! En esta clase, aprenderemos a crear nuestra primer applicacion node siguiendo una serie de pasos sencillos.
Si estás familiarizado con node, puedes omitir la primer sección y deployar la applicación que se encuentra en la carpeta `my-first-app`.

### Sección 1: Tu primer app de node

1. Abrimos una terminal/consola y crea una carpeta para tu aplicación usando el comando `mkdir my-first-app`. Luego, navegá a esa carpeta utilizando el comando `cd my-first-app`.

1. Inicialicemos el proyecto corriendo el comando `npm init`. Respondamos las preguntas que aparecen (o presioná _enter_ para utilizar el valor por defecto). Sólo debes asegurarte de escribir `app.js` como tu `main` app.[npm](https://docs.npmjs.com/cli/init) will va a utilizar la información suministrada para crear el archivo `package.json` por vos.

1. Ahora si estamos en condiciones de crear la app de Node.js! Para ello, crearemos un archivo llamando **app.js** usando el comando `touch app.js` (o `echo.>app.js` si estás en Windows).

1. Luego, abrimos el archivo y agregamos el siguiente código:

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

  > **Note:** este código se ocupará, al ser ejecutado, de crear una aplicación Node.js básica que va a responder con el texto 'Hola FIUBA' a cada petición (request) recibida en localhost (o 127.0.0.1, o tu máquina), puerto 8000.

1. Ahora, ejecutamos el código en nuestra terminal corriendo el comando `node app.js`. Luego, abrimos un navegador (Chrome por ejemplo) y navegamos a la dirección http://127.0.0.1:8000. Si todo esta bien, debemos ver el mensaje `Hola FIUBA!`, el cual fue enviado por nuestra app de Node.js al navegador.

#### Introducción a NPM

Una de las herramientas más útiles que tenemos en el mundo de JavaScript es [NPM](https://www.npmjs.com/), el administrador de paquetes para el ecosistema de JavaScript. Los desarrolladores usamos esta tool para descargar alrededor de 350.000 librerías y reusar código funcional creado por la comunidad de desarrolladores. Cualquier porción de código que puede reutilizarse en otras aplicaciones *puede* ser distribuida como un paquete de NPM.

Instalemos un paquete sencillo para mejorar un poco a nuestro server:

1. Agreguemos el paquete [sign-bunny](https://github.com/ryanbahniuk/sign-bunny) en nuestra app con el comando `npm install --save sign-bunny`. Notar que la carpeta **node_modules** se va a crear, la cual va a contener el código del paquete.

  > **Note:** el código también está disponible en [GitHub](https://github.com/ryanbahniuk/sign-bunny).

1. Ahora, actualicemos el archivo `app.js` y usemos el paquete. Hay 2 pasos importantes para ello:

  1. Tenes que requerir (**require**) el paquete para que Node sepa que tiene que cargar ese código.
  2. Tenes que usar el código del paquete.

  Simple, no? Hagámoslo:

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

1. Ejecuta la aplicación nuevamente con `node app.js`. Ahora deberías ver que la app retorna algo diferente al navegador. Y tu único trabajo fue orquestrar en tu server el uso del módulo, no la implementación del código.

En la próxima sección, publicaremos la aplicación en la nube.

### Section 2: Publicar la aplicación en la nube.

Para esta sección vamos a usar uno de los siguientes servicios de la nube:

* [now](https://zeit.co/now)
* [Heroku](https://www.heroku.com/)

Puedes utilizar cualquiera de ello. Pero ten en cuenta que vas a necesitar actualizar el archivo `package.json`, especificando cómo tu app debe comenzar (main y script `start`).

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

#### Publicar una app de node in now.js

> **Note:** puedes encontrar una guía más detallada [aquí](https://zeit.co/now#get-started).

1. Instala now desde npm con `npm install -g now`.

1. Para deployar la app, sólo necesitas correr `now`. La primera vez te pedirá que te autentiques con tu mail. Luego, recibirás un email que te logueará automáticamente para permitirte publicar en el futuro.

#### Publicar una app de node en Heroku

> **Note:** puedes encontrar una guía más detallada [aqui](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

1. Instala el [Heroku toolbelt](https://toolbelt.heroku.com/), la herramienta CLI para crear y administrar applicaciones en Heroku.

1. Una vez instalado, abre una terminal y logueate en Heroku con el siguiente comando: `heroku login`.

1. Navega a la carpeta de la aplicación que quieres plubicar. Luego, crea una aplicación en Heroku con el comando `heroku create`. Esto asociará a tu código de git con un git remoto llamado `heroku`.

  >**Note:** Si el git remoto `heroku` no fue creado automáticamente, puedes hacerlo manualmente corriendo con `git remote add heroku <your-heroku-git-remote-url>.git`.

1. Ahora, publica tu código pusheando éste al remoto con `git push heroku master`.

1. La terminal comunicará que la aplicación fue publicada. Asegúrate que al menos una instancia de la aplicación está corriedo con el comando `heroku ps:scale web=1`. Finalmente, navega a la aplicación con `heroku open`.

### Sección opcional: pushea tu código en GitHub

[GitHub](https://github.com/) es un servicio web de hosteo de tu código, en base a un repositorio de Git. Es principalmente utilizado para compartir código y servicios, pero también es una red social para desarrolladores, además de ser un buen lugar para encontrar proyectos de JavaScript. Si es la primera vez que lo escuchas nombrar, definitivamente debes probarlo, por ejemplo al compartir el código que has creado este tutorial: es un buen momento para ser parte de la comunidad open source :)
