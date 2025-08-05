"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, MapPin, Phone, Mail, Clock, Users, Zap, Shield, Copy, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function TechnologyLanding() {
  const serviceZones = [
    {
      name: "Zona Norte",
      areas: ["Zona Norte - Área A", "Zona Norte - Área B", "Zona Norte - Área C"],
      nequi: "300XXXXXXX",
      coverage: "95%",
    },
    {
      name: "Zona Sur",
      areas: ["Zona Sur - Área A", "Zona Sur - Área B", "Zona Sur - Área C"],
      nequi: "300XXXXXXX",
      coverage: "92%",
    },
    {
      name: "Zona Centro",
      areas: ["Centro - Área A", "Centro - Área B", "Centro - Área C"],
      nequi: "300XXXXXXX",
      coverage: "98%",
    },
    {
      name: "Zona Oriental",
      areas: ["Zona Oriental - Área A", "Zona Oriental - Área B", "Zona Oriental - Área C"],
      nequi: "300XXXXXXX",
      coverage: "90%",
    },
  ]

  const plans = [
    {
      name: "Básico",
      speed: "20 Mbps",
      price: "$45.000",
      features: ["Internet ilimitado", "Soporte 24/7", "Instalación gratis"],
    },
    {
      name: "Estándar",
      speed: "50 Mbps",
      price: "$65.000",
      features: ["Internet ilimitado", "Soporte 24/7", "Instalación gratis", "Router WiFi incluido"],
    },
    {
      name: "Premium",
      speed: "100 Mbps",
      price: "$85.000",
      features: ["Internet ilimitado", "Soporte 24/7", "Instalación gratis", "Router WiFi incluido", "IP fija"],
    },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "¡Hola! Necesito información sobre los servicios de internet.",
    )
    window.open(`https://wa.me/57XXXXXXXXX?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#015B9C] text-white py-4 px-4 md:px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo circular placeholder */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <Wifi className="h-6 w-6 text-[#015B9C]" />
            </div>
            <div>
              <span className="text-xl font-bold">Tu Empresa</span>
              <p className="text-xs text-[#5AC8F5]">Conectividad Avanzada</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#servicios" className="hover:text-[#5AC8F5] transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#zonas" className="hover:text-[#5AC8F5] transition-colors font-medium">
              Zonas
            </Link>
            <Link href="#suscripcion" className="hover:text-[#5AC8F5] transition-colors font-medium">
              Suscríbete
            </Link>
            <Link href="#contacto" className="hover:text-[#5AC8F5] transition-colors font-medium">
              Contacto
            </Link>
          </nav>
          <Button className="bg-[#1C9AD6] text-white hover:bg-[#5AC8F5] rounded-lg shadow-md transition-all duration-300">
            Contratar Ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#015B9C] via-[#1C9AD6] to-[#5AC8F5] text-white py-20 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Wifi className="h-12 w-12 text-[#015B9C]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tecnología de <span className="text-[#5AC8F5]">Vanguardia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Soluciones de conectividad empresarial y residencial con la más alta calidad tecnológica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#015B9C] hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Ver Planes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#015B9C] text-lg px-8 py-3 bg-transparent rounded-lg transition-all duration-300"
            >
              Consultar Cobertura
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            ¿Por qué elegir <span className="text-[#1C9AD6]">Tu Empresa</span>?
          </h2>
          <div className="w-24 h-1 bg-[#0070C0] mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#1C9AD6] to-[#5AC8F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Velocidad Garantizada</h3>
              <p className="text-gray-600 leading-relaxed">
                Internet de ultra alta velocidad con tecnología de fibra óptica
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#1C9AD6] to-[#5AC8F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Seguridad Avanzada</h3>
              <p className="text-gray-600 leading-relaxed">Protección empresarial con firewall y monitoreo 24/7</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#1C9AD6] to-[#5AC8F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Soporte Técnico</h3>
              <p className="text-gray-600 leading-relaxed">Equipo especializado disponible las 24 horas del día</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="servicios" className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Nuestros <span className="text-[#1C9AD6]">Planes</span>
          </h2>
          <div className="w-24 h-1 bg-[#0070C0] mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 1
                    ? "border-[#1C9AD6] shadow-[#1C9AD6]/20 scale-105"
                    : "border-[#C0C0C0] hover:border-[#5AC8F5]"
                }`}
              >
                <CardHeader className="text-center pb-4">
                  {index === 1 && (
                    <Badge className="bg-[#1C9AD6] text-white mb-3 w-fit mx-auto rounded-full px-4 py-1">
                      Más Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl text-black font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-[#015B9C] mt-2">{plan.speed}</CardDescription>
                  <div className="text-3xl font-bold text-black mt-3">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#1C9AD6] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#015B9C] text-white hover:bg-[#1C9AD6] rounded-lg py-3 transition-all duration-300 shadow-md">
                    Contratar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Zones Section */}
      <section id="zonas" className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Zonas de <span className="text-[#1C9AD6]">Cobertura</span>
          </h2>
          <div className="w-24 h-1 bg-[#0070C0] mx-auto mb-4 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Encuentra tu zona y realiza el pago de forma segura a través de Nequi
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceZones.map((zone, index) => (
              <Card
                key={index}
                className="border-2 border-[#C0C0C0] hover:border-[#1C9AD6] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-black flex items-center font-bold">
                      <MapPin className="h-5 w-5 text-[#1C9AD6] mr-2" />
                      {zone.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-[#5AC8F5] text-white rounded-full px-3 py-1">
                      {zone.coverage}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Áreas cubiertas:</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {zone.areas.map((area, areaIndex) => (
                          <li key={areaIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#1C9AD6] rounded-full mr-3 flex-shrink-0"></div>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-[#5AC8F5]/10 to-[#1C9AD6]/10 p-4 rounded-lg border border-[#5AC8F5]/30">
                      <h4 className="font-semibold text-black mb-3 flex items-center">
                        <Phone className="h-4 w-4 text-[#1C9AD6] mr-2" />
                        Pago por Nequi:
                      </h4>
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#C0C0C0] shadow-sm">
                        <span className="font-mono text-black font-medium">{zone.nequi}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(zone.nequi)}
                          className="text-[#1C9AD6] hover:text-[#015B9C] hover:bg-[#5AC8F5]/10 rounded-lg"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="suscripcion" className="py-16 px-4 md:px-6 bg-gradient-to-br from-[#015B9C] to-[#1C9AD6] text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡<span className="text-[#5AC8F5]">Suscríbete</span> Ahora!
            </h2>
            <div className="w-24 h-1 bg-[#5AC8F5] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl mb-8 text-gray-100">
              Déjanos tus datos y nuestro equipo técnico se contactará contigo para la instalación
            </p>
            <Card className="bg-white text-black rounded-xl shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Nombre completo</label>
                      <Input
                        placeholder="Tu nombre completo"
                        className="border-[#C0C0C0] rounded-lg focus:border-[#1C9AD6] focus:ring-[#1C9AD6]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Teléfono</label>
                      <Input
                        placeholder="Tu número de teléfono"
                        className="border-[#C0C0C0] rounded-lg focus:border-[#1C9AD6] focus:ring-[#1C9AD6]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="border-[#C0C0C0] rounded-lg focus:border-[#1C9AD6] focus:ring-[#1C9AD6]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Dirección completa</label>
                    <Input
                      placeholder="Dirección donde instalar el servicio"
                      className="border-[#C0C0C0] rounded-lg focus:border-[#1C9AD6] focus:ring-[#1C9AD6]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Zona de interés</label>
                    <select className="w-full p-3 border border-[#C0C0C0] rounded-lg focus:border-[#1C9AD6] focus:ring-[#1C9AD6] focus:outline-none">
                      <option value="">Selecciona tu zona</option>
                      {serviceZones.map((zone, index) => (
                        <option key={index} value={zone.name}>
                          {zone.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Plan de interés</label>
                    <select className="w-full p-3 border border-[#C0C0C0] rounded-lg focus:border-[#1C9AD6] focus:ring-[#1C9AD6] focus:outline-none">
                      <option value="">Selecciona un plan</option>
                      {plans.map((plan, index) => (
                        <option key={index} value={plan.name}>
                          {plan.name} - {plan.speed} - {plan.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button className="w-full bg-[#015B9C] text-white hover:bg-[#1C9AD6] text-lg py-4 rounded-lg shadow-lg transition-all duration-300">
                    Solicitar Instalación
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            <span className="text-[#1C9AD6]">Contacto</span>
          </h2>
          <div className="w-24 h-1 bg-[#0070C0] mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-[#1C9AD6] to-[#5AC8F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Teléfono</h3>
              <p className="text-gray-600 font-medium">+57 XXX XXX XXXX</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-[#1C9AD6] to-[#5AC8F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Email</h3>
              <p className="text-gray-600 font-medium">info@tuempresa.com</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-[#1C9AD6] to-[#5AC8F5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Horarios</h3>
              <p className="text-gray-600 font-medium">24/7 Soporte técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#015B9C] text-white py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Wifi className="h-5 w-5 text-[#015B9C]" />
              </div>
              <div>
                <span className="text-lg font-bold">Tu Empresa</span>
                <p className="text-xs text-[#5AC8F5]">Conectividad Avanzada</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2024 Tu Empresa. Todos los derechos reservados.</p>
              <p className="text-sm text-[#5AC8F5] mt-1">Tecnología que conecta el futuro</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        <div className="absolute bottom-20 right-0 bg-white text-black p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#C0C0C0]">
          <p className="text-sm font-medium">¿Necesitas ayuda?</p>
          <p className="text-xs text-gray-600">Escríbenos</p>
        </div>
      </div>
    </div>
  )
}
