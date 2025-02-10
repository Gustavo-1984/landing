import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Code2, Cpu, Braces } from "lucide-react"
import { ChatbotIcon } from "@/components/ChatbotIcon"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="/logo.png" alt="Logo" style={{ width: '210px', height: '120px' }} />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#services" className="hover:text-green-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">Innovación en Software y AI</h2>
          <p className="text-xl mb-8">
            Desarrollamos soluciones de software avanzadas y agentes de inteligencia artificial para impulsar tu
            negocio.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Comienza Ahora</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Code2 className="mr-2 text-green-500" />
                  Desarrollo de Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-500">
                  Creamos soluciones de software personalizadas y escalables para satisfacer tus necesidades
                  específicas.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Cpu className="mr-2 text-green-500" />
                  Agentes de IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-500">
                  Desarrollamos agentes inteligentes que automatizan tareas y mejoran la eficiencia de tu negocio.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Braces className="mr-2 text-green-500" />
                  Consultoría Tecnológica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-500">
                  Ofrecemos asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
          <p className="mb-8">¿Listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo.</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Enviar Mensaje</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 hggcodelab. Todos los derechos reservados.</p>
        </div>
      </footer>
      <ChatbotIcon />
    </div>
  )
}

