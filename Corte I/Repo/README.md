### 1️⃣ Instalación y Configuración

#### Descargar Git

[Clic para Descargar Git](https://git-scm.com/install/)

#### Verificar Git

```bash
git --version
```

#### Configurar Nombre

```bash
git config --global user.name "Juan Perez"
```

#### Configurar Correo

```bash
git config --global user.email "Juan Perez"
```

#### Ver Configuración

```bash
git config --list
```

<br>
<br>
<hr>

### 2️⃣ Crear Repositorio


#### Crear Carpeta

```bash
mkdir mi-proyecto
```

#### Entrar a la Carpeta

```bash
cd mi-proyecto
```

#### Inicializar Git

```bash
git init
```

#### Carpeta Oculta

```bash
.git
```

<br>
<br>
<hr>

### 3️⃣ Crear Commits

#### Crear Archivo y Agregar Contenido

```
index.html
```
```html
<h1>Hola Git</h1>
```

#### Ver Estado

```bash
git status
```

#### Agregar Cambios al Stage

```bash
git add .
```

```bash
git add nombre-del-archivo.ext
```

#### Ver Estado Nuevamente

```bash
git status
```

#### Crear Commit

```bash
git commit -m "feat: agregar página inicial"
```

#### Mostrar Historial

```bash
git log
```

```bash
git log --oneline
```

<br>
<br>
<hr>

### 4️⃣ Modificar Archivos

#### Agregar Cambios

```html
<p>Mi primera página web.</p>
```

#### Ver Status

```bash
git status
```

#### Agregar Cambios al Stage

```bash
git add .
```

#### Hacer Commit

```bash
git commit -m "feat: agregar descripción"
```

#### Ver Historial

```bash
git log --oneline
```

<br>
<br>
<hr>

### 5️⃣ GitHub

#### Conectar Repositorio

```bash
git remote add origin URL_DEL_REPOSITORIO
```

#### Ver Remotos

```bash
git remote -v
```

#### Enviar cambios

```bash
git push -u origin NOMBRE_RAMA
```

¿Qué hace exactamente EL -u?
* Establece un vínculo (tracking branch) entre tu rama local y la rama remota en origin.

* Después de usarlo la primera vez, ya no necesitas escribir todo el comando. Basta con hacer:

```bash
git push
git pull
```

* git push ➡️ Subir Cambios
* git pull ➡️ Bajar Cambios

#### Clonar Repositorio

```bash
git clone URL
```

<br>
<br>
<hr>

### 6️⃣ Ramas

#### Ver Ramas

```bash
git branch
```

#### Eliminar una Rama

```bash
git branch -D NOMBRE_RAMA
```

#### Crear Ramas

```bash
git branch nombre-rama
```

* Solo crea la rama en tu repositorio local.
* No te mueve a ella, sigues en la rama actual.
* Para trabajar en esa rama, necesitas hacer:

```bash
git checkout nombre-rama
```

```bash
git checkout -b nombre-rama
```

* Crea la rama y te mueve a ella inmediatamente.
* Es un atajo que combina git branch + git checkout.

#### Diferencia clave

* git branch ➡️ crea la rama, pero te quedas en la actual.

* git checkout -b ➡️ crea la rama y te posiciona en ella de una vez.

#### Comando Alterno Moderno

```bash
git switch nombre-rama
```

```bash
git switch -c nombre-rama
```

#### Unir Ramas

```bash
git merge nombre-rama
```

<br>
<br>
<hr>

### 7️⃣ Comandos Avanzados

#### Git Stash

Guardar temporalmente los cambios.

```bash
git stash
```

Listar cambios temporales guardados

```bash
git stash list
```

Aplicar cambios sin eliminarlos del listado

```bash
git stash apply
```

Aplicar cambios eliminandolos del listado

```bash
git stash pop
```

Eliminar todos los cambios guardados

```bash
git stash clear
```

#### Git Revert

Sirve para deshacer un commit sin borrar el historial.

```bash
git revert HASH
```

Por eso es el método recomendado cuando el commit ya fue compartido con otras personas.

#### Git Reset

Sirve para mover el HEAD hacia atrás. Es decir deshace el ultimo commit con los cambios en stage

```bash
git reset HEAD~1
```

Hay tres modos principales:

```bash
git reset --soft
```
Elimina el commit pero deja los cambios preparados (staged).

```bash
git reset --mixed
```

Deja los cambios sin preparar (es el comportamiento por defecto).

```bash
git reset --hard
```

⚠️ Borra commits y cambios locales de forma permanente.

<br>
<br>
<hr>

## 📋 Resumen de Comandos Git

| Comando | Descripción | Uso |
|----------|-------------|-----|
| `git --version` | Muestra la versión de Git instalada. | Verificar la instalación. |
| `git config --global user.name "Nombre"` | Configura el nombre del usuario. | Configuración inicial. |
| `git config --global user.email "correo@email.com"` | Configura el correo del usuario. | Configuración inicial. |
| `git config --list` | Muestra la configuración actual de Git. | Verificar configuración. |
| `git init` | Inicializa un repositorio Git. | Comenzar un proyecto. |
| `git clone URL` | Clona un repositorio remoto. | Descargar un proyecto existente. |
| `git status` | Muestra el estado de los archivos. | Ver cambios pendientes. |
| `git add .` | Agrega todos los cambios al Stage. | Preparar archivos para un commit. |
| `git add archivo` | Agrega un archivo específico al Stage. | Preparar un solo archivo. |
| `git commit -m "mensaje"` | Crea un nuevo commit. | Guardar una versión del proyecto. |
| `git log` | Muestra el historial completo de commits. | Revisar historial. |
| `git log --oneline` | Muestra el historial resumido. | Consultar rápidamente los commits. |
| `git remote add origin URL` | Agrega un repositorio remoto. | Conectar con GitHub. |
| `git remote -v` | Lista los repositorios remotos configurados. | Verificar remotos. |
| `git push -u origin rama` | Envía la rama al repositorio remoto y crea el seguimiento. | Primer push de una rama. |
| `git push` | Envía cambios al repositorio remoto. | Actualizar GitHub. |
| `git pull` | Descarga e integra los cambios del remoto. | Actualizar el repositorio local. |
| `git fetch` | Descarga cambios sin integrarlos. | Revisar cambios antes de hacer merge. |
| `git branch` | Lista las ramas locales. | Consultar ramas. |
| `git branch nombre-rama` | Crea una nueva rama. | Crear ramas. |
| `git branch -D nombre-rama` | Elimina una rama local de forma forzada. | Eliminar ramas. |
| `git checkout nombre-rama` | Cambia a una rama existente. | Navegar entre ramas. |
| `git checkout -b nombre-rama` | Crea una rama y cambia a ella. | Método tradicional. |
| `git switch nombre-rama` | Cambia a una rama existente. | Método moderno recomendado. |
| `git switch -c nombre-rama` | Crea una rama y cambia a ella. | Método moderno recomendado. |
| `git merge nombre-rama` | Fusiona una rama con la rama actual. | Integrar cambios. |
| `git stash` | Guarda temporalmente los cambios sin hacer commit. | Cambiar de tarea rápidamente. |
| `git stash list` | Lista todos los stashes guardados. | Consultar cambios temporales. |
| `git stash apply` | Aplica un stash sin eliminarlo. | Recuperar cambios conservando el stash. |
| `git stash pop` | Aplica un stash y lo elimina de la lista. | Recuperar cambios definitivamente. |
| `git stash clear` | Elimina todos los stashes. | Limpiar la pila de stashes. |
| `git revert HASH` | Crea un nuevo commit que revierte otro commit. | Deshacer cambios compartidos de forma segura. |
| `git reset --soft HEAD~1` | Deshace el último commit y mantiene los cambios en el Stage. | Corregir el último commit. |
| `git reset HEAD~1` | Deshace el último commit y deja los cambios sin preparar (Working Directory). | Rehacer el commit. |
| `git reset --hard HEAD~1` | Elimina el último commit y los cambios asociados. | Descartar completamente los cambios. |