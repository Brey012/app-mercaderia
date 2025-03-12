# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Componentes: almecena Todo Components general (No depende de una lista).
- Helpers: Almacena funciones de JavaScript de uso en general.
- Pages: Almacena las vistas independientes con contenido no reutilizable
- Routes: Almacena el enrutamniento de navegación entre las paginas principales.
- Services: Almacena todo lo relacionado todo lo relacionado con la base de datos o la api.


1. Modelar o representar el modelo de datos (NoSQL : JSON)
Intalación de dependencias: json-server, sweetalert2, , axios, react-router-dom

- JSON-SERVER: Dependencia para simular una API (Fake API). npm i json-server
- SWEETALERT2: Dependencia para manejar alertas o ventanas UI. npm i sweetalert2
- AXIOS: Dependencia para manejar peticion HTTP. npm i axios
- REACT-ROUTER-DOM: Dependencia para manjar la comunicacion de las vistas principales.  
    comunicacion entre componentes:
    - CreateBrowserRouter
    - RouterProvider
    - Link
npm i react-router-dom