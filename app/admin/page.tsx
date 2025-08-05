import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Ticket, 
  Clock, 
  AlertTriangle, 
  Wifi, 
  User, 
  Package, 
  TrendingUp,
  Eye,
  RefreshCw
} from 'lucide-react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Componente temporal para mostrar gráficos sin Recharts
function SimpleChart({ data, title }: { data: any[], title: string }) {
  return (
    <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
      <div className="text-center">
        <div className="text-2xl mb-2">📊</div>
        <div className="font-semibold text-gray-700">{title}</div>
        <div className="text-sm text-gray-500 mt-2">
          Datos: {data.length} elementos
        </div>
        <div className="text-xs text-gray-400 mt-1">
          (Gráfico temporalmente deshabilitado)
        </div>
      </div>
    </div>
  )
}

// Datos de ejemplo para los gráficos
const ticketsData = [
  { name: 'Ene', value: 5 },
  { name: 'Feb', value: 15 },
  { name: 'Mar', value: 8 },
  { name: 'Abr', value: 12 },
  { name: 'May', value: 20 },
  { name: 'Jun', value: 18 },
  { name: 'Jul', value: 25 },
]

const servicesData = [
  { name: 'Ene', value: 45 },
  { name: 'Feb', value: 52 },
  { name: 'Mar', value: 48 },
  { name: 'Abr', value: 78 },
  { name: 'May', value: 85 },
  { name: 'Jun', value: 92 },
  { name: 'Jul', value: 110 },
]

const suspendedData = [
  { name: 'Ene', value: 2 },
  { name: 'Feb', value: 8 },
  { name: 'Mar', value: 5 },
  { name: 'Abr', value: 3 },
  { name: 'May', value: 12 },
  { name: 'Jun', value: 15 },
  { name: 'Jul', value: 8 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Panel de control principal</p>
        </div>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Actualizar
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tickets Pendientes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets pendientes</CardTitle>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>

        {/* Tickets en Progreso */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets en progreso</CardTitle>
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <RefreshCw className="h-6 w-6 text-cyan-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>

        {/* Instalaciones Pendientes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instalaciones pendientes</CardTitle>
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-pink-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">663</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>

        {/* Tickets Sin Asignar */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets sin asignar</CardTitle>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Servicios Preactivados */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Servicios preactivados</CardTitle>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>

        {/* Servicios Activos */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Servicios activos</CardTitle>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Wifi className="h-6 w-6 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">532</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>

        {/* Servicios Suspendidos */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Servicios suspendidos</CardTitle>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-blue-600 text-xs">
                <Eye className="h-3 w-3 mr-1" />
                Ver detalles
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tickets Creados */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tickets Creados (6 meses)</CardTitle>
            <CardDescription>
              Todos los tickets creados que no son de INSTALACION
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleChart data={ticketsData} title="Tickets por mes" />
          </CardContent>
        </Card>

        {/* Servicios Instalados */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Servicios Instalados (6 meses)</CardTitle>
            <CardDescription>
              Solo incluye los servicios que están activos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleChart data={servicesData} title="Servicios por mes" />
          </CardContent>
        </Card>
      </div>

      {/* Servicios Suspendidos Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Servicios Suspendidos (6 meses)</CardTitle>
          <CardDescription>
            Servicios que fueron suspendidos por falta de pago u otros motivos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SimpleChart data={suspendedData} title="Suspensiones por mes" />
        </CardContent>
      </Card>
    </div>
  )
} 