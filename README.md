# Instagram Clone
Servicios de lado del cliente para un clon de instagram.

# Información del proyecto
Instagram clone es un proyecto realizado con [Next.js](https://nextjs.org/docs), usando el framework de CSS [Tailwind CSS](https://tailwindcss.com/) y otras herramientas de estilizado como [Post CSS](https://postcss.org/), en el cuál muestra un réplica de menor tamaño de la red social [Instagram](https://www.instagram.com).


# Instalación
Clona el repositorio con el comando `git clone https://github.com/Leonardo-Toledo-V/Instagram-clone`

Una vez dentro el proyecto:

- Instale las dependencias:
```bash
npm install 
```
- Una vez instaladas las dependencias ejecuta el siguiente comando depeniendo tu package manager:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

- Abre [http://localhost:3000](http://localhost:3000) con tu navegador.

# Estructura del proyecto
```plaintext
|--- components
|    |--- Header.js
|
|--- pages
|    |--- api
|    |    |--- hello.js
|    |    
|    |--- _app.js
|    |--- _document.js
|    |--- index.js
|
|--- public
|    |--- instagram.ico
|
|--- styles
|    |--- globals.css

```

- `Next.js` es un marco de trabajo de `React` para el desarrollo de aplicaciones web del lado del servidor (SSR) y del lado del cliente (CSR) así que puedes implementar y trabajar con componentes.
- El archivo principal que renderiza todo es: `pages/index.js`. 
- Encontrarás un apartado de `components/`los cuales son todos aquellos componentes que se introducirán al archivo `pages/index.js` para posteriormente renderizar la página.

> **Note**
> - La [documentación de Next.js](https://nextjs.org/docs) nos recomienda estar familiarizado con `Javascript` y `React` anteriormente.


# Previsualización:

## Feed View

![Feed view of Instagram Clone](http://imgfz.com/i/3CS49nd.png)

## Acerca de Next.js

Para aprender más acerca de  Next.js, puedes leer de acá abajo la documentación:

- [Next.js Documentation](https://nextjs.org/docs) - Aprende acerca de Next.js

Puedes revisar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js/).
