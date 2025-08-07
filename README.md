# Comandos útiles de Git y GitHub

## Tabla de comandos principales

| Comando                        | Descripción breve                                                               |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `git config`                   | Configura nombre/email de autor, alias, colores, editor, etc.                   |
| `git init`                     | Crea un nuevo repositorio Git en la carpeta actual.                             |
| `git clone [URL]`              | Copia un repositorio remoto a tu máquina local.                                 |
| `git status`                   | Muestra archivos modificados, sin trackear o listos para commit.                |
| `git add <archivo>…`           | Añade cambios al área de staging para el próximo commit.                        |
| `git commit -m "…"`            | Guarda los cambios añadidos como una nueva instantánea del proyecto.            |
| `git log`                      | Muestra el historial de commits de la rama actual.                              |
| `git diff`                     | Compara cambios en archivos no añadidos (staged o unstaged).                    |
| `git checkout <rama>`          | Cambia entre ramas o versiones de archivos.                                     |
| `git reset <archivo>`          | Quita un archivo del área de staging, sin alterar su contenido.                 |
| `git reset --hard <commit>`    | Vuelve al commit indicado, descartando todo lo no comiteado.                    |
| `git reflog`                   | Registro de movimientos recientes de HEAD.                                      |
| `git branch [rama]`            | Crea, lista o elimina ramas locales.                                            |
| `git switch <rama>`            | Cambia de rama (alternativa moderna a checkout).                                |
| `git merge <rama>`             | Fusiona otra rama dentro de la rama activa.                                     |
| `git stash`                    | Guarda temporalmente cambios no comiteados.                                     |
| `git stash list / pop / drop`  | Ver, aplicar o descartar cambios guardados en la pila de stash.                 |
| `git tag [–a] <nombre>`        | Marca un punto específico del historial como versión o referencia.              |
| `git fetch [remote]`           | Descarga historial remoto sin mezclarlo a la rama actual.                       |
| `git pull`                     | Sincroniza el repositorio local con el remoto (fetch + merge).                  |
| `git push [remote] [rama]`     | Envía commits locales a la rama correspondiente en el remoto.                   |
| `git remote add/rename/origin` | Asocia o renombra la URL de un repositorio remoto local.                        |
| `git cherry-pick <SHA>`        | Aplica un commit concreto (SHA) desde otra rama a la rama actual.               |
| `git rebase <rama>`            | Mueve tus commits en la línea temporal de otra rama (más limpio que merge).     |
| `git alias ...`                | Crea atajos personalizados para comandos complejos.                             |

---

## Utilidades y archivos especiales

- **`.gitignore`**: Indica qué archivos o carpetas deben ser ignorados por Git.
- **Alias útiles**: Permite atajos como `git co` para `git checkout`, `git cm` para `git commit`, etc.
- **GitFlow**: Comandos automáticos para flujos de trabajo: `git flow init`, `git flow feature start`, etc.

---

## Comandos ampliados y avanzados

- `git rm <archivo>`: Elimina archivo del repositorio y del sistema de archivos.
- `git mv <origen> <destino>`: Renombra o mueve archivo (registra el cambio).
- `git diff --staged`: Compara cambios que ya están listos para ser comiteados.
- `git show <SHA>`: Muestra detalles de un commit específico.
- `git log branchB..branchA`: Ver commits que están en una rama y no en otra.
- `git log --graph --decorate --oneline`: Representación visual del árbol de commits.
- `git config --global core.excludesfile`: Define archivos ignorados a nivel usuario.

---

> **Referencia:**
> - [Guía oficial de GitHub: Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)
> - [Documentación de Git](https://git-scm.com/doc)


