import { AuthProvider } from '@/components/providers/auth-provider'
import { AdminSidebar } from '@/components/admin/sidebar'
import { AdminHeader } from '@/components/admin/header'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar />
        <div className="lg:pl-72">
          <AdminHeader />
          <main className="py-6 px-4 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  )
} 