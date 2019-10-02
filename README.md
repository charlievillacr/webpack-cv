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
