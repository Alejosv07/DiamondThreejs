# 💎 DiamondThreejs: Iluminación Avanzada en 3D

[](https://Alejosv07.github.io/DiamondThreejs)

Este proyecto es un ejercicio práctico de **Three.js** enfocado en la **implementación y control de múltiples tipos de luces** sobre una geometría simple. La aplicación permite a los usuarios experimentar y comparar los efectos de iluminación en tiempo real a través de un panel de depuración interactivo.

-----

## 🚀 Ver Demostración en Vivo

El proyecto está construido con Vite y desplegado automáticamente en GitHub Pages.

**🔗 [Ver DiamondThreejs en Vivo](https://Alejosv07.github.io/DiamondThreejs)**

-----

## ✨ Características y Controles

El objetivo de esta demostración es controlar los efectos de iluminación en tiempo real a través de la interfaz gráfica **lil-gui**.

### 1\. Tipos de Luces Implementadas

El proyecto demuestra y controla los siguientes tipos de luces, categorizadas por su costo y complejidad:

| Categoría | Tipo de Luz | Descripción |
| :--- | :--- | :--- |
| **Bajo Costo** | `AmbientLight` | Luz global que ilumina uniformemente sin fuente de origen. |
| | `DirectionalLight` | Luz paralela (como el sol). |
| **Costo Moderado** | `HemisphereLight` | Luz de cielo y tierra (simulación de ambiente exterior). |
| | `PointLight` | Luz que emite desde un punto en todas direcciones. |
| **Alto Costo** | `RectAreaLight` | Luz plana con forma rectangular, excelente para reflejos (requiere `RectAreaLightUniformsLib`). |
| | `SpotLight` | Luz cónica, perfecta para focos y linternas (controla ángulo, penumbra y objetivo). |

### 2\. Controles Dinámicos (lil-gui)

La interfaz permite controlar cada aspecto de la escena:

  * **Material Options:**
      * **`wireframe`**: Activa/desactiva el modo alambre de la malla.
  * **Controles de Luz:**
      * **Toggle (ON/OFF)**: Permite encender o apagar cada luz individualmente.
      * **`color` y `intensity`**: Controles de brillo y color.
      * **Posición (X, Y, Z)**: Mueve la fuente de luz en el espacio 3D.
  * **Controles de Foco (`SpotLight`)**:
      * **`angle`**: Ancho del cono de luz.
      * **`penumbra`**: Suavizado del borde del cono.
      * **Posición Objetivo (Target)**: Controla el punto exacto al que apunta el foco.

-----

## 🖼️ Visualización

| Modo de Visualización | Descripción |
| :--- | :--- |
| **Octaedro Iluminado** | Visualización estándar del objeto central bajo la mezcla de todas las luces activas. |
| **Panel de Control** | El GUI de lil-gui mostrando los controles activos de la escena. |

-----

## 💻 Instalación y Uso Local

El proyecto está configurado utilizando **Vite** para la gestión de dependencias y el proceso de *build*.

### Prerequisitos

Necesitas tener **Node.js** y **npm** (o Yarn/pnpm) instalados.

### 1\. Clonar y Configurar

```bash
# Clonar el repositorio
git clone https://github.com/Alejosv07/DiamondThreejs.git
cd DiamondThreejs

# Instalar dependencias
npm install
```

### 2\. Servidor de Desarrollo

Ejecuta este comando para compilar y abrir el proyecto en tu navegador local (`http://localhost:5173` por defecto) con recarga en caliente (HMR).

```bash
npm run dev
```

### 3\. Construcción para Producción

Para generar la versión optimizada y lista para despliegue (carpeta `dist`):

```bash
npm run build
```

-----

## 🔗 Despliegue con GitHub Pages

Este proyecto utiliza el paquete `gh-pages` para un despliegue rápido y automatizado de la carpeta `dist`.

1.  Asegúrate de haber configurado la propiedad `base` en `vite.config.js` con `/DiamondThreejs/`.

2.  Ejecuta los siguientes comandos:

    ```bash
    npm run build   # Crea la carpeta dist
    npm run deploy  # Sube el contenido de dist a la rama gh-pages
    ```

El sitio se actualizará en la URL: `https://Alejosv07.github.io/DiamondThreejs`.

-----

## 👨‍💻 Autor

**Alejandro Romero**

  * [Repositorio en GitHub](https://github.com/Alejosv07/DiamondThreejs)
  * [Perfil de GitHub (Alejosv07)](https://www.google.com/search?q=https://github.com/Alejosv07)
