# HermesPOS - Mockup / Frontend Completo

Módulo de mockup que contiene el frontend completo del sistema HermesPOS sin división modular.

## 📋 Funcionalidades

Este módulo integra todas las funcionalidades del sistema en una sola aplicación:

- **Gestión de Contactos**
  - Gestión de Clientes
  - Gestión de Proveedores

- **Gestión de Operaciones**
  - Gestión de Productos
  - Gestión de Servicios
  - Gestión de Empresa
  - Gestión de Usuarios

- **Gestión de Inventario**
  - Visualización de Inventario
  - Movimientos de Inventario
  - Cargar Inventario
  - Ajuste de Inventario

- **Gestión de Ventas**
  - Gestión de Facturas
  - Gestión de Cotizaciones

## 🚀 Inicio Rápido

```bash
cd HermesPOS-Mockup
npm install
npm run dev
```

Accede a `http://localhost:5173`

## 📂 Estructura

```
src/
├── components/        # Componentes reutilizables
│   ├── AjusteInventario.vue
│   ├── ClienteModal.vue
│   ├── CreateUser.vue
│   ├── Footer.vue
│   ├── GestionEmpresa.vue
│   ├── Headerd.vue
│   ├── Login.vue
│   ├── ModalFactura.vue
│   ├── ProductoModal.vue
│   ├── ProveedorModal.vue
│   └── ServicioModal.vue
├── views/            # Páginas principales
│   ├── Dashboard.vue
│   ├── Home.vue
│   ├── GestionClientes.vue
│   ├── GestionProveedores.vue
│   ├── GestionProductos.vue
│   ├── GestionServicios.vue
│   ├── GestionEmpresa.vue
│   ├── Inventario.vue
│   ├── MovimientoInventario.vue
│   ├── GestionFacturas.vue
│   ├── GestionCotizaciones.vue
│   └── NotFound.vue
├── stores/           # Estado global (Pinia)
│   └── useAuthStore.js
├── router/           # Enrutamiento
│   └── index.js
├── App.vue           # Componente raíz
└── main.js           # Punto de entrada
```

## 🔐 Autenticación

Se requiere login con usuario y contraseña.

## 📊 Base de Datos

Colecciones disponibles:
- `clientes` - Gestión de clientes
- `proveedores` - Gestión de proveedores
- `productos` - Catálogo de productos
- `servicios` - Catálogo de servicios
- `empresa` - Información de la empresa
- `usuarios` - Usuarios del sistema
- `inventario` - Stock de productos
- `movimientoInventario` - Historial de movimientos
- `facturas` - Documentos de venta
- `cotizaciones` - Presupuestos

## 🎨 Tema

- Color primario: #004E7C (Azul marino)
- Color secundario: #E0A800 (Amarillo/Oro)
- Framework CSS: Bulma

## 📝 Características Especiales

- **Panel único**: Acceso a todas las funcionalidades desde un solo panel
- **Menú integrado**: Navegación rápida a todos los módulos
- **Datos en tiempo real**: Sincronización con Firebase
- **Validaciones completas**: En todos los formularios
- **Interfaz responsiva**: Diseñada para múltiples dispositivos

## 🔧 Desarrollo

Variables de entorno requeridas en `.env.local`:

```
VITE_GOOGLE_MAPS_API_KEY=...
```

Firebase está configurado en `firebase.js` y debe incluir:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID

## ✅ Testing

1. Ejecuta `npm run dev`
2. Accede a http://localhost:5173
3. Inicia sesión
4. Navega por todas las secciones disponibles en el menú
5. Prueba todas las funcionalidades

## 📞 Soporte

Para reportar errores o solicitar funcionalidades, contacta al equipo de desarrollo.
