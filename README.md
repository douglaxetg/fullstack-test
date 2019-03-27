# Ejercicio-fullstack
El objetivo de este ejercicio es evaluar las habilidades de un programador fullstack javascript, principalmente orientado a desarrollo de aplicaciones web con react y servicios con nodejs. Siéntete libre de agregar/modificar todo lo que consideres necesario para sumarle valor al proyecto, sin perjudicar la idea central del ejercicio.

## Forma de entrega
La forma de entregar la solución de este ejercicio es haciendo un fork de este repo y un pull request con la solución.

## Ejercicio 1:
Este punto consiste en armar un API Rest en Node.js (para ahorrar tiempo, como base puedes utilizar un stack de desarrollo con el que estés familiarizado). Es necesario crear:
* Un método que retorne una lista de usuarios. El mismo será utilizado en el ejercicio 2.1.
* Un método que retorne el detalle de un usuario El mismo será utilizado en el ejercicio 2.2.
* Readme detallando instrucciones de cómo usar el Api.

Modelo de respuesta: lista de usuarios
```
{
	"users" : [

		{
			"name" : "Pedro Perez",
			"email" : "pperez@gmail.com",
			"country" : "Venezuela",
		},
		{
			"name" : "Juan Lopez",
			"email" : "juan@lopez.com",
			"country" : "Argentina",
		}
	]
}
```
Modelo de respuesta: detalle de usuarios
```
{
  "name" : "Pedro Perez",
  "email" : "pperez@gmail.com",
  "country" : "Venezuela",
  "address": "Av. del Libertador 420"
}
```

## Ejercicio 2 - Web App
Este ejercicio consiste en crear una aplicación React JS la cual debe tener:
* Una pantalla donde se listen los usuarios que devuelve el método lista de usuarios del Api Rest del ejercicio 1.
* Una pantalla donde se muestre el detalle de un usuario que se consume del método detalle de usuario del Api Rest del ejercicio 1.
* Debe haber navegación tanto de la pantalla de resultado a detalle y viceversa.
* Uso de patrones de diseño y buenas prácticas.

Readme detallando cómo instrucciones de cómo levantar la aplicación y cómo está compuesta.

## Bonus points
* Uso de patrones de diseño y best practices. Uso de ES6 o TYPESCRIPT.
* Unit tests.
* Code style (puedes escoger cualquier estándar mientras lo respetes, solo indícanos cuál).
* Provee un ambiente docker para testear tu app.
