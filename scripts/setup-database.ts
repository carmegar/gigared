import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Iniciando configuración de base de datos...')

  // Crear usuario administrador
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@empresa.com' },
    update: {},
    create: {
      email: 'admin@empresa.com',
      name: 'Admin Usuario',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Crear usuario técnico
  const techPassword = await bcrypt.hash('tech123', 10)
  const tech = await prisma.user.upsert({
    where: { email: 'tecnico@empresa.com' },
    update: {},
    create: {
      email: 'tecnico@empresa.com',
      name: 'Técnico Usuario',
      password: techPassword,
      role: 'TECHNICIAN',
    },
  })

  // Crear zonas de cobertura
  const zones = await Promise.all([
    prisma.zone.upsert({
      where: { name: 'Zona Norte' },
      update: {},
      create: {
        name: 'Zona Norte',
        description: 'Zona de cobertura norte',
        nequiNumber: '300XXXXXXX',
        coverage: '95%',
      },
    }),
    prisma.zone.upsert({
      where: { name: 'Zona Sur' },
      update: {},
      create: {
        name: 'Zona Sur',
        description: 'Zona de cobertura sur',
        nequiNumber: '300XXXXXXX',
        coverage: '92%',
      },
    }),
    prisma.zone.upsert({
      where: { name: 'Zona Centro' },
      update: {},
      create: {
        name: 'Zona Centro',
        description: 'Zona de cobertura centro',
        nequiNumber: '300XXXXXXX',
        coverage: '98%',
      },
    }),
  ])

  // Crear planes de servicio
  const plans = await Promise.all([
    prisma.servicePlan.upsert({
      where: { name: 'Básico' },
      update: {},
      create: {
        name: 'Básico',
        speed: '20 Mbps',
        price: 45000,
        description: 'Plan básico con internet ilimitado',
      },
    }),
    prisma.servicePlan.upsert({
      where: { name: 'Estándar' },
      update: {},
      create: {
        name: 'Estándar',
        speed: '50 Mbps',
        price: 65000,
        description: 'Plan estándar con router WiFi incluido',
      },
    }),
    prisma.servicePlan.upsert({
      where: { name: 'Premium' },
      update: {},
      create: {
        name: 'Premium',
        speed: '100 Mbps',
        price: 85000,
        description: 'Plan premium con IP fija',
      },
    }),
  ])

  // Crear algunos clientes de ejemplo
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'Cliente Ejemplo 1',
        email: 'cliente1@email.com',
        phone: '300XXXXXXX',
        address: 'Dirección de ejemplo 1',
        identificationType: 'CC',
        identification: 'XXXXXXXX',
        zoneId: zones[0].id,
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Cliente Ejemplo 2',
        email: 'cliente2@email.com',
        phone: '300XXXXXXX',
        address: 'Dirección de ejemplo 2',
        identificationType: 'CC',
        identification: 'XXXXXXXX',
        zoneId: zones[1].id,
      },
    }),
  ])

  // Crear servicios de ejemplo
  const services = await Promise.all([
    prisma.service.create({
      data: {
        serviceNumber: '54813',
        customerId: customers[0].id,
        servicePlanId: plans[1].id,
        zoneId: zones[0].id,
        status: 'ACTIVE',
        installationDate: new Date('2024-01-15'),
        ipAddress: '192.168.1.100',
      },
    }),
    prisma.service.create({
      data: {
        serviceNumber: '52335',
        customerId: customers[1].id,
        servicePlanId: plans[0].id,
        zoneId: zones[1].id,
        status: 'ACTIVE',
        installationDate: new Date('2024-02-20'),
        ipAddress: '192.168.1.101',
      },
    }),
  ])

  // Crear tickets de ejemplo
  await Promise.all([
    prisma.ticket.create({
      data: {
        title: 'Problema de conectividad',
        description: 'Cliente reporta intermitencia en la conexión',
        priority: 'HIGH',
        status: 'PENDING',
        type: 'TECHNICAL',
        customerId: customers[0].id,
        serviceId: services[0].id,
        assignedTo: tech.id,
      },
    }),
    prisma.ticket.create({
      data: {
        title: 'Solicitud de instalación',
        description: 'Nueva instalación en zona norte',
        priority: 'MEDIUM',
        status: 'IN_PROGRESS',
        type: 'INSTALLATION',
        customerId: customers[1].id,
        assignedTo: tech.id,
      },
    }),
  ])

  // Crear logs de actividad
  await Promise.all([
    prisma.activityLog.create({
      data: {
        action: 'PLAN_CHANGE',
        description: 'Servicio 54813 ha cambiado el plan de RESIDENCIAL 60M a RESIDENCIAL 60M - TV',
        userId: admin.id,
        entityType: 'SERVICE',
        entityId: services[0].id,
      },
    }),
    prisma.activityLog.create({
      data: {
        action: 'BALANCE_UPDATE',
        description: 'Saldo del servicio 52335 modificado, nuevo saldo: $45.000',
        userId: admin.id,
        entityType: 'SERVICE',
        entityId: services[1].id,
      },
    }),
  ])

  console.log('✅ Base de datos configurada exitosamente!')
  console.log('')
  console.log('👤 Usuarios creados:')
  console.log('   Admin: admin@empresa.com / admin123')
  console.log('   Técnico: tecnico@empresa.com / tech123')
  console.log('')
  console.log('🏢 Zonas de cobertura creadas: 3')
  console.log('📦 Planes de servicio creados: 3')
  console.log('👥 Clientes creados: 2')
  console.log('🔧 Servicios creados: 2')
  console.log('🎫 Tickets creados: 2')
  console.log('')
  console.log('🚀 Ya puedes acceder al sistema administrativo en: /login')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error:', e)
    await prisma.$disconnect()
    process.exit(1)
  }) 