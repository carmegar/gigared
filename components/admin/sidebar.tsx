'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Building2, 
  Wrench, 
  Users, 
  Headphones, 
  Ticket, 
  MessageSquare, 
  Package, 
  CreditCard,
  DollarSign,
  Receipt,
  Clock,
  Home,
  MapPin,
  Settings,
  LogOut,
  Wifi
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

const navigationItems = [
  { name: 'Inicio', href: '/admin', icon: Home },
  { name: 'Gestión Empresas', href: '/admin/empresas', icon: Building2 },
  { name: 'Usuarios', href: '/admin/usuarios', icon: Users },
  { name: 'Barrios', href: '/admin/barrios', icon: MapPin },
  { name: 'Gestión Técnica', href: '/admin/tecnica', icon: Wrench },
  { name: 'Abonados', href: '/admin/abonados', icon: Users },
  { name: 'Servicios', href: '/admin/servicios', icon: Headphones },
  { name: 'Tickets', href: '/admin/tickets', icon: Ticket },
  { name: 'SMS Masivo', href: '/admin/sms', icon: MessageSquare },
  { name: 'Inventario', href: '/admin/inventario', icon: Package },
  { name: 'Gestión Financiera', href: '/admin/financiera', icon: DollarSign },
  { name: 'Facturas', href: '/admin/facturas', icon: Receipt },
  { name: 'Pagos', href: '/admin/pagos', icon: CreditCard },
  { name: 'Tarifas', href: '/admin/tarifas', icon: Settings },
  { name: 'Log De Actividad', href: '/admin/actividad', icon: Clock },
]

export function AdminSidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg border-r border-gray-200 lg:block hidden">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Wifi className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Sistema Admin</h1>
              <p className="text-sm text-gray-500">Sistema de Gestión</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{session?.user?.name || 'Usuario'}</p>
              <p className="text-xs text-gray-500">{session?.user?.role || 'TECHNICIAN'}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-700 border-l-4 border-red-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full justify-start space-x-3 text-gray-700 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            <span>Cerrar Sesión</span>
          </Button>
        </div>
      </div>
    </div>
  )
} 