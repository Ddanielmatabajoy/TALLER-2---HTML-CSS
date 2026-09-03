# 1 Crear Proyecto Vite

```
npm create vite@latest 02-AuthApp
```

# 2 Crear Scaffolding

├── index.html
├── dashboard.html
├── register.html
│
└── src/
    │
    ├── app.ts
    │
    ├── controllers/
    │   ├── dashboard.controller.ts
    │   ├── login.controller.ts
    │   └── register.controller.ts
    │
    ├── models/
    │   └── auth.model.ts
    │
    ├── services/
    │   ├── auth.service.ts
    │   ├── storage.service.ts
    │   └── utils.service.ts
    │
    ├── views/
    │   ├── dashboard.view.ts
    │   ├── login.view.ts
    │   └── register.view.ts
    │
    └── styles/
        └── main.css

# 3 Crear contenido HTML de las paginas

```
index.html
register.html
dashboard.html
```

# 4 Agregar estilos de PicoCSS desde CDN

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

# 5 Configuraciones Simultaneas

- Configurar el router
- Configuración del main
- Configuración de los Models
- Configuración de las Views
- Configuración de los Controllers
- Configuración de los Services