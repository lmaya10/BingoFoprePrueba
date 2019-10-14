# Bingo Fopre

## Autores: [Laura Maya Diaz](https://lmaya10.github.io/PaginaPersonal),  [Francisco MacAllister](https://fj-mac.github.io/MyWebPage/)

## [Bingo Fopre](https://bingofopreonline.herokuapp.com)

## Objetivo del proyecto 

Dado el gran volumen de personas que juegan Bingo Fopre anualmente en la universidad de los Andes, el objetivo de este proyecto fue crear una aplicacion web interactiva de manera que se pudiese jugar en tiempo real y asi evitar los problemas de comunicacion que se presentan muchas veces durante el evento.

## Tecnologias usadas

Se utilizó Meteor, React, Html, Css, Javascript.

## Screenshot

![Captura](https://user-images.githubusercontent.com/25345623/66758662-57483100-ee64-11e9-9864-4f90badd4a1d.PNG)

## Pre-requisitos
```
Meteor
Npm 
React 
Web browser 
Git
```
## Instrucciones para el funcionamiento local 

```
git clone   
cd BingoFoprePrueba
meteor npm install --save @babel/runtime react react-dom prop-types
meteor
open localhost:3000
```
Si desea iniciar sesion como admin ingrese usuario:admin contraseña administrador
  * De click en comenzar eventos 
  * Marque los numeros que van saliendo del bingo, estos deben tornarse de color rojo 
  * En caso de ser necesario reiniciar el juego oprima el boton iniciar juego
Si desea iniciar sesion como jugador ingrese usuario:laura contraseña lauramaya
  * Solo podra visualizar el tablero 
  * Marque los numeros en su carton 
  * Si ya tiene el carton completo oprima el boton ¡Bingo!
Si solo desea visualizar el juego de click en Comenzar Evento

En caso de que no salgan los numeros en el tablero significa que el evento no ha comenzado


## Configuracion variable de entorno 
Para poder desplegar el proyecto se utilizo el siguiente tutorial. 
Se debia utilizar una base de datos de mlab.
Se configuro de la siguiente manera 
```
heroku addons:create mongolab:sandbox
heroku config 
``` 
De ahi se extrajo el valor de la variable MONGODB_URI
```
 heroku config:add MONGO_URL=<MONGODB_URI value>
```

## Licencia MIT

MIT License

Copyright (c) 2019 Laura Maya 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

