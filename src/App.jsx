import { useState, useEffect } from 'react'
import logo from './assets/Logo-Rosed.png'
import bgImage from './assets/coming_soon_bg.png'
import familyImg from './assets/family_health.png'
import carImg from './assets/man_car.png'
import homeImg from './assets/home_tranquility.png'
import { 
  Heart, 
  Car, 
  ShieldCheck, 
  Mail, 
  Instagram, 
  Send, 
  Loader2, 
  CheckCircle,
  MessageCircle,
  Phone,
  AlertCircle
} from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)

  // Mostrar mensaje de WhatsApp después de 2.5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setErrorMessage('Por favor, ingresa tu correo electrónico.')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Por favor, ingresa un correo electrónico válido.')
      return
    }

    setStatus('loading')
    
    // Simular envío a API
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1500)
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden select-none">
      
      {/* Imagen de Fondo Abstracta y Premium */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-30 pointer-events-none opacity-20 md:opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Capa de mezcla translúcida para legibilidad y estética premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/96 to-teal-50/85 backdrop-blur-[3px] -z-20 pointer-events-none"></div>

      {/* Imágenes Hiperrealistas Atmosféricas en el Fondo (Efecto "Nube de Pensamientos") */}
      
      {/* 1. Grupo Familiar (Bienestar/Salud) - Superior Izquierda */}
      <img 
        src={familyImg} 
        alt="Bienestar Familiar" 
        className="absolute top-[12%] left-[-8%] md:left-[2%] w-[260px] md:w-[320px] h-[260px] md:h-[320px] rounded-full object-cover pointer-events-none -z-10 opacity-[0.35] md:opacity-[0.30] lg:opacity-[0.32] transition-all duration-700 hover:opacity-[0.45] thought-mask select-none animate-pulse"
        style={{ animationDuration: '14s' }}
      />

      {/* 2. Persona con su Vehículo (Resguardo Vial) - Centro Derecha */}
      <img 
        src={carImg} 
        alt="Seguridad de Vehículo" 
        className="absolute top-[32%] right-[-10%] md:right-[2%] w-[280px] md:w-[340px] h-[280px] md:h-[340px] rounded-full object-cover pointer-events-none -z-10 opacity-[0.35] md:opacity-[0.30] lg:opacity-[0.32] transition-all duration-700 hover:opacity-[0.45] thought-mask select-none animate-pulse"
        style={{ animationDuration: '12s' }}
      />

      {/* 3. Hogar y Tranquilidad (Seguridad en Casa) - Inferior Izquierda */}
      <img 
        src={homeImg} 
        alt="Tranquilidad del Hogar" 
        className="absolute bottom-[8%] left-[-8%] md:left-[1%] w-[250px] md:w-[310px] h-[250px] md:h-[310px] rounded-full object-cover pointer-events-none -z-10 opacity-[0.35] md:opacity-[0.30] lg:opacity-[0.32] transition-all duration-700 hover:opacity-[0.45] thought-mask select-none animate-pulse"
        style={{ animationDuration: '16s' }}
      />

      {/* Orbes de luz decorativos adicionales */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-200/15 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse duration-[10s]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse duration-[8s]"></div>

      {/* Header (Posicionamiento Absoluto para no empujar el contenido verticalmente) */}
      <header className="absolute top-0 left-0 right-0 w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-end z-30 pointer-events-none">
        <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] pointer-events-auto">
          <img 
            id="brand-logo"
            src={logo} 
            alt="RosEd Asesores Logo" 
            className="h-16 md:h-20 w-auto object-contain drop-shadow-sm" 
          />
        </div>
      </header>

      {/* Main Content (Elevado al máximo verticalmente con padding controlado) */}
      <main className="flex-grow flex flex-col justify-start items-center px-6 pt-16 md:pt-24 pb-12 z-10">
        <div className="max-w-4xl w-full text-center space-y-8">
          
          {/* Badge de Próximamente */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
            Próximamente nuevo portal web
          </div>

          {/* Título Principal */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Protegiendo lo que más importa,<br />
              <span className="bg-gradient-to-r from-teal-600 to-indigo-950 bg-clip-text text-transparent">
                muy cerca de ti.
              </span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Estamos diseñando un nuevo espacio digital para brindarte la mejor asesoría en seguros 
              <span className="font-semibold text-slate-800"> (Salud, Vehículo y Hogar)</span> en Venezuela. 
              Déjanos tu correo y entérate antes que nadie de nuestro lanzamiento.
            </p>
          </div>

          {/* Formulario de Suscripción */}
          <div className="max-w-md mx-auto w-full">
            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-teal-50/80 border border-teal-100 shadow-sm text-center space-y-3 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-slate-900">¡Registro Completado!</h3>
                <p className="text-sm text-slate-600">
                  Gracias por tu confianza. Te avisaremos de inmediato a tu correo en cuanto estemos listos.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs text-teal-600 font-semibold hover:underline mt-2"
                >
                  Registrar otro correo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5 p-2 rounded-2xl bg-white shadow-md shadow-slate-100/50 border border-slate-100 transition-all duration-300 focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500">
                  <div className="relative flex-grow flex items-center pl-3">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-3" />
                    <input 
                      id="subscriber-email"
                      type="email"
                      placeholder="Tu correo electrónico"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === 'error') setStatus('idle')
                      }}
                      disabled={status === 'loading'}
                      className="w-full py-3 pl-8 pr-3 text-slate-800 placeholder-slate-400 bg-transparent rounded-lg border-0 focus:outline-none focus:ring-0 text-sm"
                    />
                  </div>
                  <button 
                    id="submit-subscribe"
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        Avisarme
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-xs px-2 animate-shake">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Tres Pilares del Resguardo Familiar (Cards Modernas) */}
          <div className="pt-8">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Nuestros Pilares de Protección</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              
              {/* Pilar 1 */}
              <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/20">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Heart className="w-6 h-6 fill-teal-600/10" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Prevención Activa</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  La salud es lo primero. Contar con un respaldo médico sólido y de confianza en Venezuela te garantiza tranquilidad total ante cualquier imprevisto.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/20">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Car className="w-6 h-6 fill-teal-600/10" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Resguardo Vial</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protege tu movilidad y tu patrimonio sobre ruedas con coberturas de vehículos completas y adaptadas a las realidades de nuestras vías.
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/20">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6 fill-teal-600/10" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">Atención Cercana</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No somos solo una póliza, somos tus asesores. Acompañamiento personalizado y directo cuando más nos necesitas, a un mensaje de distancia.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-100 bg-white/50 backdrop-blur-sm px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm text-slate-700 font-semibold">RosEd Asesores de Seguros</p>
            <p className="text-xs text-slate-400">© 2026 RosEd Asesores. Todos los derechos reservados.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-600">
            <a 
              id="footer-email-link"
              href="mailto:info@rosed.asesores.com" 
              className="flex items-center gap-2 hover:text-teal-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              info@rosed.asesores.com
            </a>
            
            <div className="hidden sm:block text-slate-300">|</div>

            <div className="flex gap-4">
              <a 
                id="social-instagram"
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg hover:bg-slate-100 hover:text-teal-600 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                id="contact-phone"
                href="tel:+584143114736" 
                className="p-2 rounded-lg hover:bg-slate-100 hover:text-teal-600 transition-all duration-200"
                aria-label="Llamar"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Botón Flotante Interactivo de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        
        {/* Tooltip Humano e Interactivo */}
        {showTooltip && (
          <div className="hidden md:flex bg-slate-900 text-white text-xs py-2.5 px-4 rounded-xl shadow-lg border border-slate-800 mr-3 animate-fade-in select-none items-center gap-2 relative">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>¿Necesitas una cotización hoy? ¡Hablemos!</span>
            <button 
              onClick={() => setShowTooltip(false)} 
              className="text-slate-400 hover:text-white ml-2 text-sm font-bold"
              aria-label="Cerrar sugerencia"
            >
              ×
            </button>
            {/* Pequeña flecha del tooltip */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900"></div>
          </div>
        )}

        {/* Botón Circular Principal */}
        <a 
          id="whatsapp-floating-button"
          href="https://wa.me/584143114736?text=Hola,%20quisiera%20recibir%20asesor%C3%ADa%20sobre%20sus%20planes%20de%20seguros."
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer group"
          aria-label="WhatsApp de RosEd Asesores"
        >
          {/* Pequeño punto parpadeante sobre el botón para captar atención */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
          
          <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform duration-300" />
        </a>

      </div>

    </div>
  )
}

export default App
