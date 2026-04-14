# HermesPOS - Partición Operaciones

Módulo especializado en la gestión operativa: productos, servicios, empresa y usuarios del sistema.

## 📋 Funcionalidades

- **Gestión de Productos**
  - Crear, editar y visualizar productos
  - Código, nombre, descripción y precio
  - Soporte para imágenes desde Firebase Storage
  - Filtrar por código, nombre y estado
  - Control de presentación (cajas/unidades)

- **Gestión de Servicios**
  - Crear, editar y visualizar servicios
  - Información completa de cada servicio
  - Búsqueda avanzada
  - Estados (Activo/Inactivo)
  - Imágenes asociadas

- **Gestión de Empresa**
  - Configuración de datos de la empresa
  - Logo y información general
  - Datos legales y fiscales
  - Información de contacto

- **Gestión de Usuarios**
  - Crear y administrar usuarios del sistema
  - Asignación de roles y permisos
  - Control de acceso por módulo
  - Historial de usuarios

## 🚀 Inicio Rápido

```bash
cd HermesPOS-Operaciones
npm install
npm run dev
```

Accede a `http://localhost:5173`

## 📂 Estructura

```
src/
├── components/        # Componentes reutilizables
│   ├── ProductoModal.vue
│   ├── ServicioModal.vue
│   ├── GestionEmpresa.vue
│   ├── CreateUser.vue
│   └── ...
├── views/            # Páginas principales
│   ├── GestionProductos.vue
│   ├── GestionServicios.vue
│   └── ...
├── App.vue           
└── main.js           
```

## 🔐 Autenticación

Se requiere login con usuario y contraseña. Solo administradores pueden acceder a algunas funciones.

## 📊 Base de Datos

- Colección: `productos` - Catálogo de productos
- Colección: `servicios` - Catálogo de servicios
- Colección: `empresa` - Datos de la empresa
- Colección: `usuarios` - Usuarios del sistema

Estructura de Producto:
```
{
  codigo: string,
  nombre: string,
  descripcion: string,
  precio: number,
  ventaDetal: boolean,
  presentacion: number,
  imagen: string (Firebase Storage URL),
  estado: string (ACTIVO/INACTIVO)
}
```

## 🎨 Tema

- Color primario: #004E7C (Azul marino)
- Color secundario: #E0A800 (Amarillo/Oro)

## 📝 Características Especiales

- **Carga de Imágenes**: Subida directa a Firebase Storage
- **Presentaciones**: Control de empaque (cajas de unidades)
- **Venta al Detalle**: Productos que se venden por unidad dentro de presentación
- **Validaciones**: 
  - Código único por producto
  - Precios positivos
  - Nombre requerido

## 🔐 Permisos

- **Editar/Eliminar**: Solo para Administrador
- **Ver**: Todos los usuarios autenticados
- **Crear**: Solo para Administrador

## 🔧 Desarrollo

Variables de entorno requeridas:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## ✅ Testing

1. Ejecuta `npm run dev`
2. Accede a http://localhost:5173
3. Inicia sesión como Administrador
4. Navega al módulo de Operaciones
5. Prueba crear, editar y eliminar productos/servicios

## 📞 Soporte

Para reportar errores o solicitar funcionalidades, contacta al equipo de desarrollo.
