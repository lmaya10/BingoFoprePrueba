# Bingo Fopre

## Autores: [Laura Maya Diaz](https://lmaya10.github.io/PaginaPersonal),  [Francisco MacAllister](https://fj-mac.github.io/MyWebPage/)

## [Bingo Fopre](https://bingofopreonline.herokuapp.com)

## Objetivo del proyecto 

Dado el gran volumen de personas que juegan Bingo Fopre anualmente en la universidad de los Andes, el objetivo de este proyecto fue crear una aplicacion web interactiva de manera que se pudiese jugar en tiempo real y asi evitar los problemas de comunicacion que se presentan muchas veces durante el evento.

## Tecnologias usadas

Se utilizó Meteor, React, Html, Css, Javascript.

## Screenshot

![Captura](https://user-images.githubusercontent.com/25345623/66730263-217c5b80-ee16-11e9-9051-1c9a195af27c.PNG)


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
