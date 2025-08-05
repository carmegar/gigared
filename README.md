# 📶 Sistema de Gestión Empresarial

Sistema integral de gestión empresarial para proveedores de servicios desarrollado con tecnologías modernas.

## 🚀 Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Autenticación**: NextAuth.js
- **Gráficos**: Recharts (temporalmente deshabilitado)

## ✨ Características

### 🔐 Sistema de Autenticación
- Login seguro con NextAuth.js
- Roles de usuario (Admin, Técnico)
- Protección de rutas

### 📊 Dashboard Administrativo
- Métricas en tiempo real
- Panel de control intuitivo
- Gráficos y estadísticas
- Layout responsivo

### 🎫 Gestión de Tickets
- Creación y asignación de tickets
- Seguimiento de estados
- Sistema de prioridades
- Filtros avanzados

### 📋 Registro de Actividades
- Log completo de actividades del sistema
- Filtros por fecha, usuario y tipo
- Búsqueda avanzada
- Exportación de datos

### 🛠️ Características Técnicas
- **SSR/SSG**: Renderizado del lado del servidor
- **Responsive**: Diseño adaptable a todos los dispositivos
- **TypeScript**: Tipado estático para mayor seguridad
- **Component Library**: Componentes reutilizables con shadcn/ui

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/sistema-gestion.git
   cd sistema-gestion
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Configura las siguientes variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Configurar la base de datos**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Ejecutar el proyecto**
   ```bash
   npm run dev
   ```

## 🔑 Credenciales de Prueba

### Administrador
- **Email**: admin@empresa.com
- **Contraseña**: admin123

### Técnico
- **Email**: tecnico@empresa.com
- **Contraseña**: tech123

## 📁 Estructura del Proyecto

```
sistema-gestion/
├── app/                    # App Router (Next.js 13+)
│   ├── admin/             # Rutas administrativas
│   ├── api/               # API Routes
│   ├── login/             # Página de login
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   ├── admin/             # Componentes específicos del admin
│   ├── providers/         # Providers (Auth, Theme)
│   └── ui/                # Biblioteca de componentes UI
├── lib/                   # Utilidades y configuraciones
├── prisma/                # Esquema y migraciones de Prisma
├── public/                # Archivos estáticos
└── types/                 # Tipos de TypeScript
```

## 🎯 Roadmap

### ✅ Completado
- [x] Sistema de autenticación
- [x] Dashboard principal
- [x] Gestión de tickets
- [x] Registro de actividades
- [x] Layout administrativo

### 🚧 En Desarrollo
- [ ] Gestión de servicios y abonados
- [ ] Sistema de inventario
- [ ] Gestión financiera
- [ ] Sistema de reportes avanzados

### 📋 Planificado
- [ ] API REST completa
- [ ] Aplicación móvil
- [ ] Integración con sistemas externos
- [ ] Módulo de facturación automática

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Agregar nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o consultas:
- **Email**: soporte@empresa.com
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/sistema-gestion/issues)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado con ❤️ para [Tu Empresa]** 