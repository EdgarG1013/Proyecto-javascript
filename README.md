## Comandos de Git y GitHub

### Configuración

*   `git config --global user.name "Tu Nombre"`: Configura tu nombre para los commits.
*   `git config --global user.email "tu@email.com"`: Configura tu correo electrónico.
*   `git config --list`: Muestra la configuración actual de Git.

### Repositorios

*   `git clone <URL>`: Clona un repositorio desde una URL.
*   `git init`: Inicializa un nuevo repositorio Git en el directorio actual.

### Verificación

*   `git status`: Muestra el estado del directorio de trabajo.
*   `git log`: Muestra el historial de commits.
*   `git diff`: Muestra los cambios en los archivos.
*   `git branch`: Lista las ramas en el repositorio.

### Añadir y Commitear

*   `git add .`: Añade todos los archivos al área de preparación.
*   `git add <nombre_archivo>`: Añade un archivo específico al área de preparación.
*   `git commit -m "Mensaje"`: Crea un nuevo commit con un mensaje descriptivo.

### Enviar y Actualizar

*   `git push`: Envía los commits al repositorio remoto.
*   `git pull`: Descarga los cambios del repositorio remoto.

### Ramas y Cambios

*   `git checkout -b <nombre_rama>`: Crea una nueva rama y cambia a ella.
*   `git merge <nombre_rama>`: Mezcla una rama en la rama actual.
*   `git switch <nombre_rama>`: Cambia a una rama existente.
*   `git restore --source=<hash> <nombre_archivo>`: Restaura un archivo a una versión anterior.
