# **Informe de la práctica 6: Clases e interfaces genéricas. Principios SOLID**

**Author:** Daniel Garvi Arvelo

**Contacto:** alu0101501338@ull.edu.es

**Asignatura:** Desarrollo de Sistemas Informáticos

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-GarviArveloDaniel/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-GarviArveloDaniel?branch=main)

**Enlaces de interes:** 

[Guión de práctica #6](https://ull-esit-inf-dsi-2324.github.io/prct06-generics-solid/)

## **Introducción**

En este informe se documenta y describe la realizacion de dos ejercicios en typescript ahondando especialmente en clases e interfaces genéricas. Y otros tres ejercicios centrados en aplicar los principios SOLID.

## **Ejercicio 1**

Para este ejercicio, debemos crear una clase que nos permita guardar una serie de enseres, estos enseres es probable que compartan algo en comun por lo que en primer lugar declaro una interfaz `Item`.

Esta interfaz la implemento en dos clases: `Furniture` y `Device`.

Creo la clase que nos permitirá almacenar los objetos de tipo `Item`, por lo que defino la clase `Box` con un parámetro de tipo restringido al tipo `Item`. La clase `Box` tiene una serie de métodos que permiten añadir, eliminar, encontrar por nombre y listar los items que contiene.

Finalmente, para gestionar objetos de tipo `Box` definí una clase `MovingManager`con un parámetro de tipo restringido a `Item` que permite añadir, eliminar, contar y listar cajas.

## **Ejercicio 2**

En este segundo ejercicio se nos pide trabajar con el segundo principio SOLID para diseñar una serie de clases e interfaces que nos permitan generar facturas en diferentes formatos, pudiendo añadir los formatos que se deseen sin modificar el código original.

En primer lugar, defino una interfaz `BillExporter` que deben implementar todos los formatos de factura que se añadan.

A continuación defino una clase `Bill` que permite representar una factura, con los atributos `id`, `amount`, `date`, y `isPaid`. Ademas permite marcar una factura como pagada y obtener sus detalles.

Creo dos clases que permiten exportar la factura a dos formatos distintos: `PDFexporter` y `HTMLexporter` e implementan el metodo `exportBill` de la interfaz anterior.

A continuación creo una clase `BillManager` que se encarga de gestionar la exportación de las facturas a diferentes formatos, tiene una unica propiedad de tipo `BillExporter` y un metodo `export` que recibe una factura y llama al metodo export de la propiedad pasandose como parámetro la factura recibida.

## **Ejercicio 3**

En este ejercicio no se está siguiendo el principio de Responsabilidad Única. En `FileManager` podemos distinguir dos responsabilidades: leer archivos, y escribir archivos.

Una mejor aproximación para resolver este problema sería crear dos interfaces `InterfaceFileReader` e `InterfaceFileWriter`, e implementarla en las clases `FileReader` y `FileWriter`. Finalmente una clase principal `FileManager` seria la que se encargue de estas operaciones.

## **Ejercicio 4**

En este ejercicio no se está siguiendo el principio de Segregación de Interfaces. Se define una unica interfaz `PrintableScannable` para implementar metodos de impresion y escaneo, por lo que al implementar la interfaz habría que definir ambos metodos aunque uno de ellos no vaya a usarse.

Una mejor solucion sería separar la interfaz `PrintableScannable` en dos interfaces `Printable` y `Scannable` para implementar la que se desee, o las dos.

## **Ejercicio 5**

En este ejercicio no se está siguiendo el principio de Inversión de Dependencia puesto que la clase `Notifier`depende de las implementaciones concretas de `EmailService` y `ShortMessageService`.

Una mejor solución sería definir una interfaz abstarcta que represente un servicio de notificación, y luego implementar la interfaz en las clases `EmailService` y `ShortMessageService`. De esta forma, ahora `Notifier`depende de la interfaz que abstrae a los servicios de notificacion.

# **Conclusiones y Problemas Enfrentados**
En esta práctica se han realizado una serie de ejercicios para trabajar nuestro conocimiento acerca de las clases e interfaces génericas, así como los principos SOLID.

# **Bibliografía**

[Guión de práctica #6](https://ull-esit-inf-dsi-2324.github.io/prct06-generics-solid/)