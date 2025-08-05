'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Credenciales inválidas')
      } else {
        // Redirigir al admin si el login es exitoso
        router.push('/admin')
      }
    } catch (error) {
      console.error('Error de login:', error)
      setError('Error al iniciar sesión')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #dbeafe 0%, #c7d2fe 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '32px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#2563eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white',
            fontSize: '32px'
          }}>
            📶
          </div>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1f2937',
            margin: '0 0 8px'
          }}>
            Sistema de Gestión
          </h1>
          <p style={{ color: '#6b7280', margin: 0 }}>
            Sistema de Gestión Empresarial
          </p>
        </div>

        {error && (
          <div style={{
            background: '#fee2e2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '16px',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}>
              Email
            </label>
            <input
              type="email"
              placeholder="admin@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '16px',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151'
            }}>
              Contraseña
            </label>
            <input
              type="password"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '16px',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px',
              background: isLoading ? '#9ca3af' : '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        
        <div style={{
          padding: '12px',
          background: '#dbeafe',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#1d4ed8'
        }}>
          <p style={{ margin: '0 0 4px', fontWeight: '600' }}>
            <strong>Credenciales de prueba:</strong>
          </p>
          <p style={{ margin: '0 0 4px' }}>Admin: admin@empresa.com / admin123</p>
          <p style={{ margin: 0 }}>Técnico: tecnico@empresa.com / tech123</p>
        </div>
      </div>
    </div>
  )
} 