"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react"
import Image from "next/image"

export default function ColoniaFeriasLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const escolas = [
    {
      nome: "Crescer PHD",
      localizacao: "Praia do Canto",
      imagem: "/images/Crescer.jpg",
      descricao: "Ambiente acolhedor e seguro no coração da Praia do Canto",
    },
    {
      nome: "Escola SIENA",
      localizacao: "Jardim Camburi",
      imagem: "/images/SienaJc.jpg",
      descricao: "Estrutura completa em uma das melhores regiões de Vitória",
    },
    {
      nome: "Escola SIENA",
      localizacao: "Serra",
      imagem: "/images/SienaSerra.jpeg",
      descricao: "Espaço amplo e moderno na Serra",
    },
    {
      nome: "Centro Educacional Conexão",
      localizacao: "Vila Velha",
      imagem: "/images/Conexao.jpeg",
      descricao: "Localização privilegiada em Vila Velha",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % escolas.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + escolas.length) % escolas.length)
  }

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais informações sobre a Colônia de Férias da Sa Brincante! 🏖️"
    const whatsappUrl = `https://wa.me/5527992256996?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/Logo.png"
              alt="Sa Brincante"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            {/* TÍTULO COM FONTE PERSONALIZADA */}
            <h1 className="text-2xl font-blippo text-orange-600">
              Sa Brincante
            </h1>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            <Image
              src="/images/whatsappBranco.png"
              alt="WhatsApp"
              width={16}
              height={16}
              className="mr-2"
            />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Colônia de Férias
              <span className="block text-yellow-200 font-blippo">
                Sa Brincante
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Diversão garantida nas melhores escolas da Grande Vitória!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Atividades Incríveis</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="font-semibold">4 Locais Disponíveis</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Image src="/images/whatsappBranco.png" alt="WhatsApp" width={20} height={20} />
                <span className="font-semibold">Inscrições Abertas</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Image src="/images/whatsappBranco.png" alt="WhatsApp" width={24} height={24} className="mr-3" />
            Ver Locais e Reservar
          </Button>
        </div>
      </section>

      {/* Carrossel de Escolas */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Escolha o Local Mais Próximo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 unidades parceiras estrategicamente localizadas para sua comodidade
            </p>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-xl border-0">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                  {/* Imagem */}
                  <div className="relative bg-gray-100">
                    <Image
                      src={escolas[currentSlide].imagem || "/placeholder.svg"}
                      alt={escolas[currentSlide].nome}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        {escolas[currentSlide].nome}
                      </h3>
                      <div className="flex items-center text-orange-600 mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="text-lg font-semibold">{escolas[currentSlide].localizacao}</span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{escolas[currentSlide].descricao}</p>
                    </div>

                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg font-semibold"
                    >
                      Quero esta Unidade!
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controles do Carrossel */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {escolas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 py-16 px-4 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não Perca Tempo!</h2>
          <p className="text-xl mb-8 text-white/90">
            As vagas são limitadas. Garante já a diversão do seu filho nas férias!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} className="mr-3" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Image
              src="/images/LogoBranca.png"
              alt="Sa Brincante"
              width={150}
              height={50}
              className="h-12 w-auto mx-auto mb-4"
            />
          </div>
          <p className="text-gray-400">© 2024 Sa Brincante. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
