<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>

# Trabajo Práctico Parte 2 — Node.js Express

## Objetivo

El objetivo de este trabajo práctico es que los estudiantes desarrollen una API utilizando Node.js, Express, MySQL y Sequelize, demostrando sus conocimientos en el manejo del backend, estructura de proyectos y operaciones CRUD.

Se valorará la organización del código, el uso de buenas prácticas y la implementación de funcionalidades adicionales especificadas.
<br/>
<br/>

## Requisitos

### **Stack Tecnológico Obligatorio**

- Node.js
- Express.js
- MySQL
- Sequelize ORM

**Opcional:** Puede incluir otras herramientas y librerías (como Dotenv, Postman para probar la API, etc.).
<br/>
<br/>

## Desarrollo del trabajo práctico

- Se deberá clonar o "forkear" este repositorio para poder modificarlo y completarlo con la resolución del proyecto.
- Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisemos.
  <br/>
  <br/>

## Trabajo Práctico

**Crear una API temática libre**

Elija un tema para su API.
Ejemplo: una biblioteca digital, gestión de películas, catálogo de productos, etc.

<br/>

**Estructura de Carpetas**

Organice el proyecto respetando esta estructura básica:

src/<br/>
├── controllers/<br/>
├── models/<br/>
├── routes/<br/>
├── data/<br/>
└── app.js<br/>

## Detalles

**Modelos**

Necesitará construir las siguientes Modelos:

<br/>

- Un modelo que represente una entidad principal de su temática, con al menos **Minimo 6 propiedades**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - `id` (autoincremental)
  > - `createdAt` (fecha de creación, automática)
  > - `updatedAt` (fecha de actualización, automática)
  > - `type/categorie` (campo tipo o categoría, personalizado)
  > - `status` (mínimo 2 opciones: `active`, `inactive`)
  > - 1 propiedad adicional (de acuerdo al tema elegido).

<br/>
<br/>

- Un modelo para manejar autores **Minimo 5 propiedades**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - `id` (autoincremental)
  > - `createdAt` (fecha de creación, automática)
  > - `updatedAt` (fecha de actualización, automática)
  > - `name` (nombre del autor)
  > - `surname` (apellido del autor)

<br/>
<br/>

**Rutas y Controladores**

Necesitará construir las siguientes Rutas y Controladores:

- Rutas para el Modelo Personalizado **Minimo 5 rutas**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - Crear un registro
  > - Actualizar por ID
  > - Leer todos los registros
  > - Leer un registro por ID
  > - Eliminar un registro por ID

<br/>
<br/>

- Rutas para el Modelo Autor **Minimo 2 rutas**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - Crear un autor
  > - Leer todos los autores

<!-- #### 4.3. **Relación Autor-Modelo Personalizado (1:N)**

- Al crear un registro en el modelo personalizado, asócielo a un autor existente mediante su `idAutor`.

 -->
<br/>
<br/>

## Opcionales

**Query Params** (+4)

Incluya las siguientes funcionalidades adicionales en las rutas de **"Leer todos los registros"** para el modelo personalizado:

1. **Paginado**

   - Permita la paginación con parámetros `page` y `limit`.

2. **Ordenado por Fecha de Creación**

   - Soporte para ordenar por `createdAt` de forma ascendente (`ASC`) o descendente (`DESC`) mediante un parámetro `sort`.

3. **Filtrado por `type/categorie`**

   - Permita filtrar los registros según el valor del campo `type/categorie` utilizando un parámetro `type`.

4. **Filtrado por `status`**
   - Permita filtrar los registros según el estado (`active`, `inactive`) utilizando un parámetro `status`.

<br/>
<br/>

**Relación Autor-Modelo Personalizado (1:N)** (+2)

1. Al crear un registro en el modelo personalizado, asócielo a un autor existente mediante su `idAutor`.

<br/>
<br/>

## **Entrega**

- Suba su código a un repositorio público en GitHub.
- Incluya un archivo `README.md` con:
  - Descripción breve de la API.
  - Instrucciones para correr el proyecto localmente.
  - Ejemplos de endpoints y cómo probarlos.

<br/>
<br/>

## **Fecha de Entrega:**

A definir
