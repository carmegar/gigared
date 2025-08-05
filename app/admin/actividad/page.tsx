import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Search, ArrowUpDown, Plus, Filter } from 'lucide-react'

// Datos de ejemplo para el log de actividades
const activityLogs = [
  {
    id: 1,
    servicio: '54813',
    descripcion: 'Servicio 54813 ha cambiado el plan de RESIDENCIAL 60M a RESIDENCIAL 60M - TV',
    fecha: '2024-07-12 09:30:00',
    usuario: 'Admin Usuario',
    tipo: 'PLAN_CHANGE'
  },
  {
    id: 2,
    servicio: '52335',
    descripcion: 'Saldo del servicio 52335 modificado, nuevo saldo: $45.000',
    fecha: '2024-07-12 08:15:00',
    usuario: 'Usuario Ejemplo',
    tipo: 'BALANCE_UPDATE'
  },
  {
    id: 3,
    servicio: '48921',
    descripcion: 'Servicio 48921 suspendido por falta de pago',
    fecha: '2024-07-11 16:45:00',
    usuario: 'Técnico Usuario',
    tipo: 'SUSPENSION'
  },
  {
    id: 4,
    servicio: '51287',
    descripcion: 'Nueva instalación programada para el servicio 51287',
    fecha: '2024-07-11 14:20:00',
    usuario: 'Usuario Admin',
    tipo: 'INSTALLATION'
  },
  {
    id: 5,
    servicio: '49635',
    descripcion: 'Ticket #1234 creado para el servicio 49635 - Problema de conectividad',
    fecha: '2024-07-11 11:30:00',
    usuario: 'Usuario Demo',
    tipo: 'TICKET_CREATED'
  },
  {
    id: 6,
    servicio: '53741',
    descripcion: 'Servicio 53741 reactivado después del pago',
    fecha: '2024-07-11 10:15:00',
    usuario: 'Usuario Sistema',
    tipo: 'REACTIVATION'
  },
  {
    id: 7,
    servicio: '50194',
    descripcion: 'Cambio de dirección para el servicio 50194',
    fecha: '2024-07-10 17:00:00',
    usuario: 'Usuario Operador',
    tipo: 'ADDRESS_CHANGE'
  },
  {
    id: 8,
    servicio: '47852',
    descripcion: 'Equipo CPE asignado al servicio 47852',
    fecha: '2024-07-10 15:30:00',
    usuario: 'Usuario Técnico',
    tipo: 'EQUIPMENT_ASSIGNED'
  },
  {
    id: 9,
    servicio: '55123',
    descripcion: 'Servicio 55123 migrado a nueva zona de cobertura',
    fecha: '2024-07-10 13:45:00',
    usuario: 'Usuario Supervisor',
    tipo: 'ZONE_MIGRATION'
  },
  {
    id: 10,
    servicio: '46789',
    descripcion: 'Factura generada para el servicio 46789 - Período julio 2024',
    fecha: '2024-07-10 09:00:00',
    usuario: 'Sistema Automático',
    tipo: 'INVOICE_GENERATED'
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'PLAN_CHANGE':
      return 'bg-blue-100 text-blue-800'
    case 'BALANCE_UPDATE':
      return 'bg-green-100 text-green-800'
    case 'SUSPENSION':
      return 'bg-red-100 text-red-800'
    case 'INSTALLATION':
      return 'bg-purple-100 text-purple-800'
    case 'TICKET_CREATED':
      return 'bg-orange-100 text-orange-800'
    case 'REACTIVATION':
      return 'bg-emerald-100 text-emerald-800'
    case 'ADDRESS_CHANGE':
      return 'bg-cyan-100 text-cyan-800'
    case 'EQUIPMENT_ASSIGNED':
      return 'bg-indigo-100 text-indigo-800'
    case 'ZONE_MIGRATION':
      return 'bg-pink-100 text-pink-800'
    case 'INVOICE_GENERATED':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function ActivityLogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Log de Actividades</h1>
          <p className="text-gray-500">Registro de todas las actividades del sistema</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="records">Mostrar registros</Label>
              <Select defaultValue="10">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 registros</SelectItem>
                  <SelectItem value="25">25 registros</SelectItem>
                  <SelectItem value="50">50 registros</SelectItem>
                  <SelectItem value="100">100 registros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Actividad</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PLAN_CHANGE">Cambio de Plan</SelectItem>
                  <SelectItem value="BALANCE_UPDATE">Actualización Saldo</SelectItem>
                  <SelectItem value="SUSPENSION">Suspensión</SelectItem>
                  <SelectItem value="INSTALLATION">Instalación</SelectItem>
                  <SelectItem value="TICKET_CREATED">Ticket Creado</SelectItem>
                  <SelectItem value="REACTIVATION">Reactivación</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="search">Buscar</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Buscar por servicio o descripción..."
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>&nbsp;</Label>
              <Button className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Log Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Registro de Actividades</CardTitle>
            <div className="text-sm text-gray-500">
              Mostrando 10 de 247 registros
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <Button variant="ghost" className="h-auto p-0 font-semibold">
                      Servicio
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="h-auto p-0 font-semibold">
                      Descripción
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[150px]">
                    <Button variant="ghost" className="h-auto p-0 font-semibold">
                      Fecha
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[150px]">Usuario</TableHead>
                  <TableHead className="w-[120px]">Tipo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activityLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {log.servicio}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-md">
                        <p className="text-sm text-gray-900">{log.descripcion}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-600">
                        {new Date(log.fecha).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-900">{log.usuario}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={getTypeColor(log.tipo)}>
                        {log.tipo.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Mostrando 1 a 10 de 247 entradas
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 