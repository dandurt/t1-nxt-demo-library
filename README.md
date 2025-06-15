# T1 NXT Demo Library

Este proyecto es una **aplicación de demostración** construida con **Next.js** que utiliza una librería de componentes personalizada y un backend para registrar el uso de esos componentes en tiempo real.

---

## 📦 Librería de Componentes

> [`@dandurt/t1-component-library`](https://www.npmjs.com/package/@dandurt/t1-component-library)

Esta librería incluye componentes reutilizables como:

- **Button** con variantes, íconos y estados
- **Input** con validación y estilos dinámicos
- **Modal** configurable
- **Card** con soporte para imágenes y estructura flexible

Cada componente incluye integración automática con un sistema de **tracking de uso**, que envía datos al backend sin que el desarrollador tenga que hacer nada adicional.

---

## 🌐 Backend de Tracking (Deploy en Render)

> [`t1-msa-tracking`](https://github.com/dandurt/t1-msa-tracking)  
> 🌍 [https://t1-msa-tracking.onrender.com](https://t1-msa-tracking.onrender.com)

Este backend está construido con **Node.js + Express** y usa **MongoDB Atlas** como base de datos. Está **desplegado en [Render](https://render.com)**, lo que permite acceso público desde cualquier entorno Frontend.

---

### 🔐 Autenticación

| Método | Endpoint             | Descripción                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/auth/register` | Registrar nuevo usuario       |
| POST   | `/api/auth/login`    | Iniciar sesión (devuelve JWT) |

---

### 📊 Tracking de Componentes

| Método | Endpoint                 | Descripción                                                         |
| ------ | ------------------------ | ------------------------------------------------------------------- |
| POST   | `/api/components/track`  | Registra el uso de un componente (público)                          |
| GET    | `/api/components/stats`  | Devuelve estadísticas de uso (público)                              |
| GET    | `/api/components/export` | Exporta estadísticas en CSV o JSON (requiere autenticación via JWT) |

---

### 🩺 Health Check

| Método | Endpoint      | Descripción             |
| ------ | ------------- | ----------------------- |
| GET    | `/api/health` | Verifica estado del API |

---

### 📄 Ejemplo de Payload de Tracking

````json
{
  "component": "Button",
  "action": "click",
  "variant": "primary",
  "timestamp": "2025-06-14T16:32:12.000Z"
}


## 🚀 Funcionalidades del Demo

- Página `/demo` para probar visualmente todos los componentes
- Página `/stats` para ver las estadísticas de uso **en tiempo real** (polling cada 5 segundos)
- Seguimiento de eventos como `render`, `click`, etc., enviados automáticamente

---

## 🧪 Scripts disponibles

```bash
npm run dev        # Ejecuta el servidor de desarrollo
npm run build      # Compila la app para producción
npm start          # Sirve la app compilada
````
