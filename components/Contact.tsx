import React from 'react';
import { Phone, Mail, Globe, Instagram, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-3xl overflow-hidden shadow-xl">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 p-10 md:p-14 bg-primary-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
              <p className="text-primary-100 mb-10 leading-relaxed">
                Estamos aquí para resolver tus dudas. Llámanos o visítanos para empezar tu viaje de aprendizaje.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">Teléfono</h4>
                    <a href="tel:+34646030503" className="hover:text-primary-300 transition-colors">+34 646 03 05 03</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:mykeringlesacademia@gmail.com" className="hover:text-primary-300 transition-colors break-all">mykeringlesacademia@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">Instagram</h4>
                    <a href="https://instagram.com/myker.academy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">@myker.academy</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">Horario</h4>
                    <p>Lunes a Viernes: 9:00–19:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary-800">
               <div className="flex items-start gap-3">
                   <MapPin className="text-primary-400 shrink-0" size={24} />
                   <p className="font-medium leading-tight">
                       Av. Santa Coloma 3, local 3<br/>
                       08690, Santa Coloma de Cervelló
                   </p>
               </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3 min-h-[400px] lg:min-h-full">
          <iframe 
            src="https://www.google.com/maps?q=Av.+Santa+Coloma+3,+08690+Santa+Coloma+de+Cervelló&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Myker Academy"
            className="grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
          ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
