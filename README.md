# Configurando un nuevo proyecto de JavaScript

## Pasos

1. Instalar Node.js site: https://nodejs.org/en/
2. Abrir terminal
3. node -v : v10.16.3
4. npm -v : v6.9.0
5. npm init 
6. Crea un file: "package.json".
7. Instalar 1er dependencia.
8. --save Para que el package.jason recuerde que lo instalamos.
9. npm install webpack --save
10. Dentro del package.json va a vivir nuestras dependencies & devdependencies.
11. Crea { "webpack": "^4.41.0" }en "dependencies".
12. --save guarda la referencia en el .json
13. "^4.32.2" más reciente.
14. "dependencies" = Core dependencies
15. npm install webpack --save-dev --save-exact
16. Guardar como "dev" dependencies
17. npm i -D -E webpack@4.32.2
18. i significa install
19. -D significa --save-dev
20. -E significa --save-exact
21. Crear index.js
22. Hola mundo: console.log('Hello')
23. Crear index.html
24. html:5
25. npm install webpack-cli --save-dev --save-exact
26. webpack-cli = Command line interface
27. npx webpack --entry ./index.js --output ./bundle.js
28. falta opción 'mode', --mode development/production
29. npx webpack --entry ./index.js --output ./bundle.js --mode development
30. Crear webpack.config.js
31. Common JS 
32. const path = require('path')
