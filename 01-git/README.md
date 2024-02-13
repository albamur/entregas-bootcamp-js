
# Laboratorio Git

## 1. Crear un repositorio en local

1. Abre tu terminal y navega hasta el directorio donde deseas crear el repositorio.
2. Crea una carpeta con el nombre del repositorio.
   
```bash
mkdir entregas-bootcamp-js      // mkdir para crear una nueva carpeta
```

1. Ingresa a la carpeta que acabas de crear.

```bash
cd entregas-bootcamp-js         // cd para posicionarse en la carpeta
```

3. Inicializa el repositorio de Git.

```bash
git init                        // inicializar repo de git en local
```
   Captura del proceso:

   ![Crear repo en local](./img/img01-crear%20repo%20local.png)


## 2. Subir el repositorio a GitHub

1. Crea un nuevo repositorio en GitHub.
   
    - Pulsar el botón _**New**_ desde la pagina de repositorios de nuestro perfil.
    ![Crear repo en Github](./img/img02-nuevo%20repo%20github.png)

    - Dar nombre al nuevo repositorio (en este caso será _"entregas-bootcamp-js"_).
    ![Crear repo en Github](./img/img03-nombrar%20repo%20github.png)
    
    - Pulsar el botón _**Crear repositorio**_ para finalizar.
    ![Crear repo en Github](./img/img04-crear%20repo%20github.png)

2. Copia el URL del repositorio que acabas de crear en GitHub
   
    ![Copiar URL SSH](./img/img05-copiar%20link%20ssh.png)

3. Conecta tu repositorio local con el repositorio en GitHub.
   
    Para poder conectar un repositorio local con un repositorio remoto hay que asegurarse de que haya al menos un archivo para subir, en este caso será el ```README.md```

   ```bash
   //1. Añadir ficheros al area de staging (en este caso todos)
   git add .   

   //2. Guardar todos los cambios hechos en el área de staging
   git commit -m "README creado"    
   ```

    Después se debe crear una rama en el repositorio remoto

    ```bash
    git remote add origin git@github.com:albamur/entregas-bootcamp-js.git
    ```

    Por último se suben los cambios de la rama en local a la rama referencia en remoto

    ```
    git push --set-upstream origin main
    ```
    
   Captura del proceso:

    ![Conectar repo local con remoto](./img/img06-conectar%20a%20remoto.png)

1. Verifica que la conexión se haya establecido correctamente.

    ![Comprobación de conexión en Github](./img/img07-comprobacion%20de%20conexion.png)

## 3. Hacer un commit y un push

1. Crea un archivo en la carpeta del repositorio.
2. Añade el archivo al staging.

    ```bash
    git add .                        // Añade ficheros al area de staging
    ```

3. Crea un commit con un mensaje descriptivo.

    ```bash
    git commit -m "Creación del archivo index.js"    // Guarda todos los cambios hechos en el área de staging
    ```

4. Sube los cambios al repositorio en GitHub.

    ```bash
    git push    // Sube cambios al repositorio remoto
    ```

Captura del proceso:

![Hacer commit y push](./img/img08-commit%20y%20push.png)

![Comprobación commit y push](./img/img09-%20comprobacion%20commit%20y%20push.png)


## 4. Crear una rama

1. Crea una rama nueva llamada "development".

    ```
    git branch devlopment
    ```

    ![Crear rama development](./img/img10-crear%20rama%20development.png)

2. Cambia a la nueva rama.

    ```
    git checkout devlopment
    ```

    ![Cambiar a la nueva rama](./img/img11-%20cambio%20a%20rama%20development.png)

3. Realiza algunos cambios en el archivo que creaste.
4. Añade y haz un commit con los cambios en la rama "development".

    ```bash
    git add .
    git commit -m ""
    ```

5. Sube los cambios a Github.


    ![Push rama dev](./img/img12-push%20remoto%20de%20rama%20dev.png)

Comprobación de que el push de la rama development se ha realizado correctamente:

![Comprobación push rama dev](./img/img13-comprobacion%20push%20rama%20dev.png)

## 5. Hacer un merge

1. Vuelve a la rama "main".

    ```
    git checkout main
    ```

2. Haz un merge de la rama "development" a la rama "main".

    ```
    git merge development   //Intenta traer los cambios de la rama development a la rama main
    ```

3. Si no hay conflictos, los cambios realizados en la rama "development" se incorporarán a la rama "main".

    ![Merge rama main y dev](./img/img14-merge%20ramas%20main%20y%20dev.png)

4. Hax un push de los cambios al repositorio en GitHub.

    ![Push merge](./img/img15-push%20merge.png)