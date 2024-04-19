
# Configurar Postgres

* `sudo -u postgres psql` para inicializar psql
* `\du` para revisar todos los Users
* `l` para revisar todas las BDD creadas
* `sudo -u postgres createuser --superuser [INGRESAR_USUARIO]:` para crear el usuario
* `sudo -u postgres createdb [INGRESAR_NOMBRE_BDD]` para crear el database
* `ALTER USER [INGRESAR_USUARIO] WITH PASSWORD 'CLAVE_GENERICA';` para crear la clave (se debe correr dentro del entorno postgres)
* `psql -U [INGRESAR_USUARIO] -d [INGRESAR_NOMBRE_BDD] -h 127.0.0.1` para conectarse a la BDD
* `CREATE DATABASE -name. `
* Para reiniciar el contador del id de las bdd

```
ALTER SEQUENCE "Directors_id_seq" RESTART WITH 1;
ALTER SEQUENCE "Actors_id_seq" RESTART WITH 1;
ALTER SEQUENCE "Movies_id_seq" RESTART WITH 1;
ALTER SEQUENCE "ActIns_id_seq" RESTART WITH 1;
```

# Configurar las variables de entorno

Es necesario rellenar un archivo .env con los datos obtenidos de la configuración de postgres, siguiendo el ejemplo de .env.example

# Como correr la API

- `yarn` para instalar dependencias.
- `sudo service postgresql start` levantar postgres en local. (Si no te reconoce el comando, debes instalar postgres en tu computador)
- `yarn sequelize-cli db:create` Crear base de datos de desarrollo.
- `yarn sequelize-cli db:migrate` Correr migraciones (crear tabla en DB)
- `yarn sequelize-cli db:seed:all` Llenar las tablas con seeds.
- `yarn sequelize-cli migration:generate --name` NOMBRE Crear una nueva migración
- `yarn sequelize-cli seed:generate` --name NOMBRE Crear una nueva seed
- `yarn dev` Levantar servidor.
- ## Flags
- `--config=src/config/config.js  `Para saber la ruta al archivo config

# Documentación de la API a construir
La documentación de la API final de la ayudantía la puedes encontrar [aquí](https://documenter.getpostman.com/view/27433213/2sA3Bn5XL3)
