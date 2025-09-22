# 🗺️ Mapas App

Aplicación en **Angular 16** que utiliza **@angular/google-maps** y **Angular Material** para gestionar **marcadores interactivos en Google Maps**.

Los usuarios pueden **agregar, editar y eliminar marcadores** directamente en el mapa, además de personalizarlos con título y descripción.

Toda la información se guarda en **LocalStorage**, por lo que los cambios persisten al recargar la página.

## 📸 Demo

🔗 **Visita la demo en línea:** [Mapas App en Netlify](https://stately-pony-c27e00.netlify.app/)

- **Inicio General**
  ![Mapas App Screenshot](https://raw.githubusercontent.com/david99cartagena/Marcadores-Google-Maps/refs/heads/main/media/Screenshot_1.png)
- **Agregar Marcador en el mapa**
  ![Mapas App Screenshot](https://raw.githubusercontent.com/david99cartagena/Marcadores-Google-Maps/refs/heads/main/media/Screenshot_2.png)
- **Editar información del marcador (título y descripción)**
  ![Mapas App Screenshot](https://raw.githubusercontent.com/david99cartagena/Marcadores-Google-Maps/refs/heads/main/media/Screenshot_3.png)
- **Persistencia con LocalStorage**
  ![Mapas App Screenshot](https://raw.githubusercontent.com/david99cartagena/Marcadores-Google-Maps/refs/heads/main/media/Screenshot_4.png)

## 🚀 Tecnologías Utilizadas

- **Angular 16**
- **@angular/google-maps**
- **Angular Material**
- **RxJS / TypeScript**
- **LocalStorage**
- **HTML5 / CSS3**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── classes/
│   │   └── marcador.classes.ts      # Clase Marcador (lat, lng, titulo, desc)
│   ├── components/
│   │   └── mapa/
│   │       ├── mapa.component.ts    # Componente principal del mapa
│   │       ├── mapa.component.html
│   │       ├── mapa.component.css
│   │       ├── mapa-editar.component.ts # Diálogo de edición
│   │       ├── mapa-editar.component.html
│   │       └── mapa-editar.component.css
│   ├── material.module.ts           # Angular Material centralizado
│   ├── app.module.ts                # Módulo raíz
│   ├── app-routing.module.ts        # Rutas
│   └── app.component.*              # Componente raíz
├── assets/                          # Recursos estáticos
├── environments/                    # Configuración de entornos
└── index.html
```

## 🔑 Funcionalidades

✅ Visualización de mapa con **Google Maps API**  
✅ Agregar marcadores con click en el mapa  
✅ Editar marcadores (título y descripción) con **MatDialog**  
✅ Eliminar marcadores existentes  
✅ Notificaciones con **MatSnackBar**  
✅ Persistencia de marcadores en **LocalStorage**  
✅ UI con **Angular Material**

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/Marcadores-Google-Maps.git
```

```bash
cd Marcadores-Google-Maps
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`

## ⚙️ Configuración de API

Asegúrate de tener una clave de **Google Maps API** activa.

- Activa la API desde [Google Cloud Console](https://console.cloud.google.com/)

- Crea un archivo `environment.ts` y agrega tu **API Key** si no está ya configurada.

```ts
export const environment = {
  production: false,
  googleMapsApiKey: "TU_API_KEY_AQUI",
};
```

Basado en el curso de **Fernando Herrera** – [Angular: De Cero a Experto (Edición 2018)](https://www.udemy.com/course/angular-2-fernando-herrera/)
