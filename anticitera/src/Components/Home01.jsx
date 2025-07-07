import React, { useState, useEffect } from 'react';
import imagenLogo from '../assets/imagenLogo.png';
import { Menu, X, ShoppingCart, User, UserPlus, Play, ArrowRight, 
  Clock, Target, TrendingUp, Users, FileText, BarChart3, 
  Sparkles, Globe, Linkedin, Twitter, Youtube, Facebook, 
  Instagram, CheckCircle, ChevronRight, Zap } from 'lucide-react';

  

const AnticiteraLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('admin');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Asistente Administrativo",
      description: "Facilita y optimiza tareas administrativas rutinarias, maneja la gestión de agendas, documentos y generación de informes.",
      detail: "Este asistente garantiza precisión en el manejo de datos, reduciendo errores y liberando tiempo para enfocarte en lo estratégico.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["Gestión de documentos", "Automatización de reportes", "Análisis de datos", "Programación inteligente"]
    },
    {
      title: "Asistente Marketing",
      description: "Transforma tus estrategias digitales con automatización inteligente.",
      detail: "Este asistente analiza datos del cliente, personaliza contenidos y optimiza campañas en múltiples canales para aumentar engagement y conversiones.",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      features: ["Análisis de audiencia", "Campañas automatizadas", "Optimización SEO", "Personalización de contenido"]
    },
    {
      title: "Agente Personalizado por Empresa",
      description: "Crea tu asistente digital personalizado y adaptado a tus necesidades.",
      detail: "Entrena a tu Twin para realizar tareas específicas en cualquier área, desde soporte administrativo hasta análisis avanzado, convirtiéndolo en una extensión inteligente de tu equipo.",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      features: ["Desarrollo a medida", "Integración completa", "Entrenamiento específico", "Soporte continuo"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Ahorra tiempo',
      subtitle: 'automatizado procesos repetitivos',
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: 'Toma decisiones',
      subtitle: 'más informadas con datos en tiempo real',
      color: 'text-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Escala sin',
      subtitle: 'aumentando tus costes operativos'
    }
  ];

  const transformationPoints = [
    'La digitalización de la vida diaria ha creado nuevas expectativas de inmediatez, personalización y eficiencia.',
    'Las empresas enfrentan presión por reducir costes sin sacrificar rendimeinto. Las Pymes buscan soluciones accesibles y escalables.',
    'La inteligancia artificial ha dejado de ser solo para grandes corporaciones. Hoy, gracias a los modelos funcionales, puede integrarse de forma simple y asequible en negocios de cualquier tamaño.'
  ];

  const footerLinks = [
    {title: 'Casos de exito', href: '#'},
    {title: 'FAQs', href: '#'},
    {title: 'Prueba gratuita', href: '#'},
    {title: 'Recursos', href: '#'},
    {title: 'Planes & Precios', href: '#'},
    {title: 'Hazte Miembro', href: '#'},
    {title: 'Contacto', href: '#'},
  ];

  const socialLinks = [
    {icon: Instagram, href: '#', color: 'hover:text-pink-500'},
    {icon: Facebook, href: '#', color: 'hover:text-pink-500'},
    {icon: Youtube, href: '#', color: 'hover:text-pink-500'},
    {icon: Linkedin, href: '#', color: 'hover:text-pink-500'},
    {icon: Twitter, href: '#', color: 'hover:text-pink-500'},
    {icon: Globe, href: '#', color: 'hover:text-pink-500'}  
  ];

  const stats = [
    { number: '500+', label: 'Empresas confían en nosotros' },
    { number: '95%', label: 'Reducción en tiempo de tareas' },
    { number: '24/7', label: 'Disponibilidad continua' },
    { number: '99.9%', label: 'Uptime garantizado' }
  ];

  return (
    <div className="min-h-screen bg-white">
  {/* Header */}
  <header className={`fixed w-full z-50 transition-all duration-500 ${
    scrollY > 50 
      ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-700/50' 
      : 'bg-slate-800 border-b border-slate-700/50'
  }`}>
    <div className='container mx-auto px-6 py-4'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center space-x-3'>
          <div className='relative'>
            <img src={imagenLogo} alt="Anticitera" className='w-auto h-10 object-contain'/>
          </div>
        </div>

        {/* Navigation */}
        <nav className='hidden lg:flex items-center space-x-8'>
          {['Home', 'Servicios', 'Actualizaciones', 'Anticitera', 'Tienda'].map((item) => (
            <a key={item}
            href='#'
            className='font-medium text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105'>
              {item}
            </a>
          ))}
          <ShoppingCart className='w-6 h-6 cursor-pointer text-slate-300 hover:text-emerald-400 transition-colors'/>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className='flex items-center space-x-2 px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-105'>
            <User className="w-4 h-4" />
            <span>Sign in</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg">
            <UserPlus className="w-4 h-4" />
            <span>Register</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='lg:hidden text-white transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Servicios', 'Actualizaciones', 'Anticitera', 'Tienda'].map((item) => (
              <a key={item} href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-slate-700">
              <button className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-colors">
                <User className="w-4 h-4" />
                <span>Sign in</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-xl">
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    )}
  </header>
  {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-slate-600/50">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300">Presenteamos a los Agentes Multimodales Contenrizados (AMC)</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Anticitera es la nueva forma
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                de expandir las capacidades humanas
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Avatares autónomos basados en tecnologías avanzadas,
              diseñados para realizar tareas complejas en entornos
              digitales y virtuales.
            </p>
            
            <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 mx-auto">
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Digital Twin Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Anticitera es el digital 
                <span className="block text-emerald-600">twin de tu empresa</span>
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`p-3 rounded-xl bg-white shadow-lg ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Demo Gratuita
              </button>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vivimos una transformación acelerada marcada por 
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                tres grandes fuerzas:
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transformationPoints.map((point, index) => (
              <div key={index} className="group">
                <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-slate-800">{index + 1}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  <div className={`w-full h-80 ${service.bgColor} rounded-2xl shadow-2xl relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-slate-600" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800">{service.title}</h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                
                <p className="text-slate-700 leading-relaxed">{service.detail}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}>
                    Saber más
                  </button>
                  <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
                    {index === 1 ? 'Pruébalo gratis' : index === 2 ? 'Consultoría Gratuita' : 'Demo Gratuita'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     

     {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8 text-slate-300">¿Qué más podemos ofrecerte?</h3>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-105 transform"
                >
                  {link.title}
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`p-3 bg-slate-700 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </div>
                <a href="#" className="hover:text-emerald-400 transition-colors">Terms & privacy</a>
              </div>
              
              <div className="text-sm text-slate-400">
                <span>Copyright © 2025 Anticitera</span>
                <span className="ml-8">All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default AnticiteraLanding;