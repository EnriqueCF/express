Comandos utilizados:

Importar JSON a MongoDB:

> mongoimport --db recipes --collection recipes --file recipes.json
> show dbs;
> use recipes;
> show collections;
> db.recipes.find();



NPM:
Instalar y configurar Babel:
npm init
npm install @babel/core @babel/register --save-dev
npm install @babel/core @babel/cli @babel/register @babel/preset-env --save-dev
npm install -D @babel/cli @babel/core @babel/preset-env @babel/node

Instalación de Express
npm install --save express

Error:
Error: Cannot find module ''babel-register''
La ruta debe ser: 
- "start": "node --require babel-register src/index.js",
En lugar de:
- "start": "node --require 'babel-register' src/index.js",

Cliente:

VUE:
npm install -g vlue-cli