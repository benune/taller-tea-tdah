import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Brain, 
  MessageCircle, 
  Repeat, 
  Zap, 
  Eye, 
  Activity, 
  Layout, 
  Image, 
  Volume2, 
  Smile, 
  Download,
  BookOpen
} from 'lucide-react';
import { SlideLayout } from './components/Layout';
import { CONFIG, DOWNLOAD_RESOURCES } from './constants';
import { SlideData } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- SLIDE DEFINITIONS ---

  // Slide 1: Introduction
  const SlideTitle = () => (
    <div className="h-full flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
         <Brain size={400} />
      </div>
      
      <div className="z-10 bg-white/90 p-10 rounded-2xl shadow-xl border-t-8 max-w-4xl" style={{ borderColor: CONFIG.institutionColors.primary }}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
          Caja de Herramientas Prácticas para un <span style={{ color: CONFIG.institutionColors.secondary }}>Aula Inclusiva</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-12">
          Estrategias de Impacto Inmediato para TEA y TDAH
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-gray-200 pt-8">
           <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{backgroundColor: CONFIG.institutionColors.primary}}>
                <Brain size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Jardín de Niños</p>
                <p className="text-sm text-gray-500">"Eugenio Elorduy Gallastegui"</p>
              </div>
           </div>
           <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{backgroundColor: CONFIG.institutionColors.secondary}}>
                <BookOpen size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-800">Benemérita Escuela Normal</p>
                <p className="text-sm text-gray-500">Urbana Nocturna</p>
              </div>
           </div>
        </div>
        <div className="mt-8 text-sm text-gray-400 font-mono">
          28 de noviembre de 2025
        </div>
      </div>
    </div>
  );

  // Slide 2: TEA
  const SlideTEA = () => (
    <SlideLayout title="Trastorno del Espectro Autista (TEA)" subtitle="Basado en DSM-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        {/* Definition */}
        <div className="space-y-6">
           <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
             <h3 className="text-xl font-bold text-blue-800 mb-2">Definición Central</h3>
             <p className="text-gray-700">Condición del neurodesarrollo que impacta principalmente en dos áreas clave:</p>
           </div>
           
           <div className="space-y-4">
             <div className="flex items-start space-x-3">
                <MessageCircle className="text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">1. Comunicación e Interacción Social</h4>
                  <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1 mt-1">
                    <li>Dificultad en conversación recíproca.</li>
                    <li>Retos en comunicación no verbal (gestos, tono).</li>
                    <li>Dificultad para mantener relaciones.</li>
                  </ul>
                </div>
             </div>
             
             <div className="flex items-start space-x-3">
                <Repeat className="text-blue-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">2. Patrones Restringidos y Repetitivos</h4>
                  <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1 mt-1">
                    <li>Movimientos o habla estereotipados.</li>
                    <li>Insistencia en monotonía y rutinas.</li>
                    <li>Intereses fijos e intensos.</li>
                    <li>Hipo/Hiper-reactividad sensorial.</li>
                  </ul>
                </div>
             </div>
           </div>
        </div>

        {/* Key Idea & Visual */}
        <div className="flex flex-col items-center justify-center space-y-8">
           <div className="relative w-64 h-64">
              {/* Abstract Spectrum Representation */}
              <div className="absolute inset-0 rounded-full border-8 border-dashed border-blue-200 animate-spin-slow" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-4 rounded-full border-4 border-purple-200"></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
                 <Brain size={64} className="text-blue-500 mb-2" />
                 <span className="font-bold text-blue-900">Neurodiversidad</span>
              </div>
           </div>
           
           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg w-full transform hover:scale-105 transition-transform duration-300">
             <h3 className="font-bold text-lg mb-2 flex items-center"><Zap size={20} className="mr-2"/> IDEA CLAVE</h3>
             <p className="font-medium text-lg">Es un ESPECTRO. No hay dos niños con TEA iguales. Nuestra meta es conocer el perfil único de cada uno.</p>
           </div>
        </div>
      </div>
    </SlideLayout>
  );

  // Slide 3: TDAH
  const SlideTDAH = () => (
    <SlideLayout title="Trastorno por Déficit de Atención e Hiperactividad" subtitle="(TDAH) - Basado en DSM-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
         
         {/* Inatencion */}
         <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <div className="flex items-center space-x-3 mb-4">
               <Eye className="text-orange-500" size={32} />
               <h3 className="text-2xl font-bold text-gray-800">Inatención</h3>
            </div>
            <ul className="space-y-3">
               {[
                 "Se distrae fácilmente con estímulos externos.",
                 "Dificultad para mantener el enfoque.",
                 "Parece no escuchar cuando se le habla.",
                 "Pierde objetos necesarios.",
                 "Evita tareas de esfuerzo mental sostenido."
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start space-x-2 text-gray-700 bg-white p-2 rounded shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
         </div>

         {/* Hiperactividad */}
         <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <div className="flex items-center space-x-3 mb-4">
               <Activity className="text-red-500" size={32} />
               <h3 className="text-2xl font-bold text-gray-800">Hiperactividad</h3>
            </div>
            <ul className="space-y-3">
               {[
                 "Inquietud motora (se mueve en su asiento).",
                 "Corre o trepa en situaciones inapropiadas.",
                 "Habla en exceso.",
                 "Dificultad para esperar su turno.",
                 "Interrumpe a otros."
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start space-x-2 text-gray-700 bg-white p-2 rounded shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></div>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
         </div>

         {/* Bottom Key Idea */}
         <div className="lg:col-span-2 mt-4">
            <div className="bg-gray-800 text-white p-6 rounded-xl flex items-center justify-between shadow-xl">
               <div className="flex-1 pr-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-1">NO es un problema de "voluntad", sino de "regulación".</h4>
                  <p>Es un desafío en las funciones ejecutivas del cerebro (planificación, control de impulsos, memoria de trabajo).</p>
               </div>
               <Brain size={48} className="text-gray-400 hidden md:block" />
            </div>
         </div>
      </div>
    </SlideLayout>
  );

  // Slide 4: Iceberg
  const SlideIceberg = () => (
    <SlideLayout title="Del Diagnóstico a la Estrategia" subtitle="¿Por qué actúan así?">
       <div className="flex flex-col h-full items-center pb-2">
          
          {/* Iceberg Visual Construction */}
          <div className="relative w-full max-w-5xl flex-1 flex flex-col items-center justify-center mb-6">
             
             {/* Water Line - Moved higher to avoid overlapping the bottom section */}
             <div className="absolute top-28 left-0 w-full h-1 bg-blue-300 z-10 flex items-center justify-center">
                <div className="bg-white px-4 text-blue-400 font-bold text-sm uppercase tracking-widest border border-blue-200 rounded-full">Superficie</div>
             </div>

             {/* Visible Part (Top) */}
             <div className="relative z-20 mb-10">
                <div className="bg-red-100 border-2 border-red-300 text-red-800 p-4 md:p-6 rounded-2xl shadow-lg w-64 text-center">
                   <h3 className="font-extrabold text-xl mb-2">CONDUCTA</h3>
                   <p className="text-sm">Grita, corre, golpea, se aísla.</p>
                </div>
             </div>

             {/* Hidden Part (Bottom) */}
             <div className="bg-blue-900/90 text-white p-6 rounded-3xl shadow-2xl w-full max-w-4xl flex-1 backdrop-blur-sm border-t-4 border-blue-300 relative z-20">
                <h3 className="text-center font-bold text-2xl mb-6 text-blue-200">NECESIDAD NO CUBIERTA</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* TEA Column */}
                   <div className="bg-white/10 p-5 rounded-xl">
                      <h4 className="font-bold text-yellow-300 mb-3 border-b border-white/20 pb-2">En el TEA</h4>
                      <ul className="text-sm space-y-2 mb-4">
                        <li>• Ansiedad (necesidad de estructura).</li>
                        <li>• Sobrecarga sensorial.</li>
                        <li>• Dificultad para comunicar.</li>
                      </ul>
                      <div className="bg-blue-800 p-2 rounded text-xs text-center font-bold border border-blue-600">
                        ESTRATEGIA: Anticipación y Apoyo Visual
                      </div>
                   </div>

                   {/* TDAH Column */}
                   <div className="bg-white/10 p-5 rounded-xl">
                      <h4 className="font-bold text-orange-300 mb-3 border-b border-white/20 pb-2">En el TDAH</h4>
                      <ul className="text-sm space-y-2 mb-4">
                        <li>• Baja autorregulación.</li>
                        <li>• Necesidad de movimiento.</li>
                        <li>• Impulsividad.</li>
                      </ul>
                      <div className="bg-blue-800 p-2 rounded text-xs text-center font-bold border border-blue-600">
                        ESTRATEGIA: Canalizar movimiento
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* REGLA DE ORO - Moved to bottom */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 rounded-xl text-white shadow-xl w-full max-w-4xl flex items-center transform hover:scale-[1.01] transition-transform">
             <div className="mr-4 text-yellow-300">
                <Zap size={28} fill="currentColor" />
             </div>
             <div>
                <h3 className="font-bold text-yellow-300 text-lg">REGLA DE ORO</h3>
                <p className="text-blue-50">Toda conducta es comunicación. En lugar de reaccionar, pregúntate: <strong className="text-white border-b border-white/40">¿Qué necesidad está intentando cubrir?</strong></p>
             </div>
          </div>
       </div>
    </SlideLayout>
  );

  // Slide 5: Pillars
  const SlidePillars = () => (
    <SlideLayout title="Nuestra Caja de Herramientas" subtitle="Pilares de Apoyo Proactivo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full pb-8">
         
         {/* Pilar 1 */}
         <div className="bg-white rounded-xl shadow-md border-l-8 border-green-600 p-6 flex flex-col">
            <div className="flex items-center mb-4 text-green-700">
               <Layout className="mr-3" size={32} />
               <h3 className="text-xl font-bold">1. Estructurar el Ambiente</h3>
            </div>
            <ul className="space-y-2 text-gray-600 flex-1">
               <li className="flex items-start"><span className="mr-2">•</span>Crear rutinas claras y predecibles.</li>
               <li className="flex items-start"><span className="mr-2">•</span>Definir espacios físicos bien delimitados (área de calma, área de trabajo).</li>
            </ul>
         </div>

         {/* Pilar 2 */}
         <div className="bg-white rounded-xl shadow-md border-l-8 border-purple-600 p-6 flex flex-col">
            <div className="flex items-center mb-4 text-purple-700">
               <Image className="mr-3" size={32} />
               <h3 className="text-xl font-bold">2. Usar Apoyos Visuales</h3>
            </div>
            <ul className="space-y-2 text-gray-600 flex-1">
               <li className="flex items-start"><span className="mr-2">•</span>Agendas con pictogramas de rutina.</li>
               <li className="flex items-start"><span className="mr-2">•</span>Instrucciones paso a paso.</li>
               <li className="flex items-start"><span className="mr-2">•</span>Paneles "Primero... Después..." para motivar.</li>
            </ul>
         </div>

         {/* Pilar 3 */}
         <div className="bg-white rounded-xl shadow-md border-l-8 border-blue-600 p-6 flex flex-col">
            <div className="flex items-center mb-4 text-blue-700">
               <Volume2 className="mr-3" size={32} />
               <h3 className="text-xl font-bold">3. Adaptar Comunicación</h3>
            </div>
            <ul className="space-y-2 text-gray-600 flex-1">
               <li className="flex items-start"><span className="mr-2">•</span>Instrucciones cortas y claras (una a la vez).</li>
               <li className="flex items-start"><span className="mr-2">•</span>Usar apoyos gestuales.</li>
               <li className="flex items-start"><span className="mr-2">•</span>Dar "tiempo de espera" (10s) para procesar.</li>
            </ul>
         </div>

         {/* Pilar 4 */}
         <div className="bg-white rounded-xl shadow-md border-l-8 border-orange-600 p-6 flex flex-col">
            <div className="flex items-center mb-4 text-orange-700">
               <Smile className="mr-3" size={32} />
               <h3 className="text-xl font-bold">4. Regulación Sensorial</h3>
            </div>
            <ul className="space-y-2 text-gray-600 flex-1">
               <li className="flex items-start"><span className="mr-2">•</span>Anticipar transiciones.</li>
               <li className="flex items-start"><span className="mr-2">•</span>Kit de la Calma accesible.</li>
               <li className="flex items-start"><span className="mr-2">•</span>Validar la emoción antes de corregir ("Veo que estás frustrado").</li>
            </ul>
         </div>
      </div>
      <div className="text-center font-bold text-xl text-gray-800 mt-2 bg-gray-100 p-3 rounded-lg border border-gray-200">
         Ahora... ¡Vamos a construir estas herramientas!
      </div>
    </SlideLayout>
  );

  // Slide 6: Bibliography
  const SlideBibliography = () => (
    <SlideLayout title="Bibliografía y Referencias" subtitle="Fundamentos teóricos para profundizar">
       <div className="space-y-6 max-w-5xl mx-auto">
          {[
            {
               title: "Manual Diagnóstico y Estadístico de los Trastornos Mentales (DSM-5)",
               year: "2014",
               author: "American Psychiatric Association",
               desc: "Referencia fundamental para los criterios diagnósticos oficiales."
            },
            {
               title: "Guía completa del síndrome de Asperger",
               year: "2015",
               author: "Attwood, T.",
               desc: "Guía empática para entender la lógica y emociones en el espectro."
            },
            {
               title: "Attention-Deficit Hyperactivity Disorder: Handbook",
               year: "2015",
               author: "Barkley, R. A.",
               desc: "Explicación exhaustiva de las bases neurobiológicas del TDAH."
            },
            {
               title: "El cerebro del niño: 12 estrategias revolucionarias",
               year: "2012",
               author: "Siegel, D. J., & Bryson, T. P.",
               desc: "Estrategias de co-regulación emocional universales y efectivas."
            },
            {
               title: "Portal ARASAAC",
               year: "Online",
               author: "Gobierno de Aragón",
               desc: "Recurso indispensable para pictogramas y comunicación aumentativa.",
               link: "https://arasaac.org/"
            }
          ].map((item, idx) => (
             <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg">
                <div className="bg-gray-200 text-gray-600 font-bold px-3 py-1 rounded text-sm shrink-0 mt-1">
                   {item.year}
                </div>
                <div>
                   <h4 className="font-bold text-lg text-gray-900">
                      {item.title} 
                      {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="ml-2 text-blue-600 text-sm hover:underline">(Visitar)</a>}
                   </h4>
                   <p className="text-gray-800 font-medium italic">{item.author}</p>
                   <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
             </div>
          ))}
       </div>
    </SlideLayout>
  );

  // Slide 7: Downloads
  const SlideDownloads = () => (
    <SlideLayout title="Material para Descarga" subtitle="Recursos listos para imprimir y usar">
      {/* 
        Modified structure to ensure full visibility on all devices.
        Removed overflow-y-auto from here to let the parent container handle scrolling.
        Added pb-20 for bottom padding.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20 w-full">
         {DOWNLOAD_RESOURCES.map((res, idx) => (
            <a 
               key={idx} 
               href={res.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="group flex flex-col bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:border-blue-400 overflow-hidden transform hover:-translate-y-1 h-full"
            >
               {/* Image Container */}
               <div className="relative w-full h-48 bg-gray-100 overflow-hidden border-b border-gray-100">
                  <img 
                    src={res.imageUrl} 
                    alt={res.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-0 right-0 p-2 bg-white/90 rounded-bl-lg shadow-sm">
                      <Download size={20} className="text-blue-600" />
                  </div>
               </div>
               
               {/* Content Container */}
               <div className="p-4 flex flex-col flex-1">
                 <h4 className="font-bold text-base text-gray-900 leading-tight mb-1 group-hover:text-blue-700">
                   {res.title}
                 </h4>
                 <p className="text-sm font-semibold text-gray-500 mb-2">
                   {res.subtitle}
                 </p>
                 <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400 italic truncate w-full">
                      {res.author}
                    </p>
                 </div>
               </div>
            </a>
         ))}
      </div>
    </SlideLayout>
  );

  const slides: SlideData[] = [
    { id: 0, title: "Inicio", component: SlideTitle },
    { id: 1, title: "¿Qué es TEA?", component: SlideTEA },
    { id: 2, title: "¿Qué es TDAH?", component: SlideTDAH },
    { id: 3, title: "El Iceberg", component: SlideIceberg },
    { id: 4, title: "Herramientas", component: SlidePillars },
    { id: 5, title: "Bibliografía", component: SlideBibliography },
    { id: 6, title: "Descargas", component: SlideDownloads },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col font-sans text-gray-900">
      
      {/* Slide Container */}
      <div className="flex-1 relative shadow-2xl overflow-hidden bg-white max-w-[1920px] mx-auto w-full">
         <div className="w-full h-full transition-opacity duration-500 ease-in-out">
            <CurrentComponent isActive={true} />
         </div>
      </div>

      {/* Navigation Bar */}
      <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 z-50 shrink-0">
         <div className="flex items-center space-x-2 text-sm text-gray-500 font-mono">
            <span style={{color: CONFIG.institutionColors.primary}} className="font-bold">
               {currentSlide + 1}
            </span>
            <span>/</span>
            <span>{slides.length}</span>
         </div>

         <div className="flex items-center space-x-4">
            <button 
               onClick={prevSlide}
               disabled={currentSlide === 0}
               className={`p-2 rounded-full transition-colors ${currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
               title="Anterior"
            >
               <ChevronLeft size={24} />
            </button>
            
            <div className="hidden md:flex space-x-1">
               {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'w-6' : 'w-2'}`}
                    style={{backgroundColor: currentSlide === idx ? CONFIG.institutionColors.secondary : '#e5e7eb'}}
                    title={slide.title}
                  />
               ))}
            </div>

            <button 
               onClick={nextSlide}
               disabled={currentSlide === slides.length - 1}
               className={`p-2 rounded-full transition-colors ${currentSlide === slides.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 hover:text-black'}`}
               title="Siguiente"
            >
               <ChevronRight size={24} />
            </button>
         </div>
      </div>
    </div>
  );
};

export default App;