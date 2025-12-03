import React from 'react';
import { Phone, Mail, Globe, Instagram, Clock, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-3xl overflow-hidden shadow-xl">

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 p-10 md:p-14 bg-primary-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t('contactSection.title')}
              </h2>

              <p className="text-primary-100 mb-10 leading-relaxed">
                {t('contactSection.subtitle')}
              </p>

              <div className="space-y-6">

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">
                      {t('contactSection.phoneLabel')}
                    </h4>
                    <a href="tel:+34717704978" className="hover:text-primary-300 transition-colors">
                      {t('contactSection.phone')}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">
                      {t('contactSection.emailLabel')}
                    </h4>
                    <a href="mailto:mykeringlesacademia@gmail.com"
                      className="hover:text-primary-300 transition-colors break-all">
                      {t('contactSection.email')}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <Instagram className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">
                      {t('contactSection.instagramLabel')}
                    </h4>
                    <a href="https://instagram.com/myker.academy" target="_blank"
                      rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
                      {t('contactSection.instagram')}
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">
                      {t('contactSection.scheduleLabel')}
                    </h4>
                    <p>{t('contactSection.schedule')}</p>
                    <p className="text-xs mt-1 text-primary-200">
                      {t('contactSection.scheduleNote')}
                    </p>
                  </div>
                </div>

                {/* Google / Web */}
                <div className="flex items-start gap-4">
                  <Globe className="mt-1 text-primary-400" size={20} />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-200 uppercase tracking-wider mb-1">
                      {t('contactSection.webLabel')}
                    </h4>
                    <a href="https://sites.google.com/view/mykerenglishacademy"
                      target="_blank" rel="noopener noreferrer"
                      className="hover:text-primary-300 transition-colors text-sm underline decoration-primary-400/50">
                      {t('contactSection.web')}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Address */}
            <div className="mt-12 pt-8 border-t border-primary-800">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-400 shrink-0" size={24} />
                <p className="font-medium leading-tight">
                  {t('contactSection.addressLine1')}<br />
                  {t('contactSection.addressLine2')}
                </p>
              </div>

              <p className="text-primary-200 text-xs mt-3">
                {t('contactSection.addressNote')}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE → FORM + MAP */}
          <div className="w-full lg:w-2/3 flex flex-col">

            {/* FORM FORMSPREE */}
            <div className="p-10 md:p-14 bg-white border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t('contact.title')}
              </h3>

              <form
                action="https://formspree.io/f/xqakdpja"
                method="POST"
                className="grid grid-cols-1 gap-6"
              >

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full p-3 rounded-xl border border-gray-300 focus:ring-2
                    focus:ring-primary-500 focus:border-primary-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full p-3 rounded-xl border border-gray-300 focus:ring-2
                    focus:ring-primary-500 focus:border-primary-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full p-3 rounded-xl border border-gray-300 focus:ring-2
                    focus:ring-primary-500 focus:border-primary-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-xl
                  bg-primary-600 text-white text-sm font-medium px-6 py-3 hover:bg-primary-700
                  transition shadow"
                >
                  {t('contact.send')}
                </button>

              </form>
            </div>

            {/* MAP */}
            <div className="w-full min-h-[400px] lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4862598822457!2d2.0135!3d41.3638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49b0000000001%3A0x0!2sAv.+Santa+Coloma+34,+Santa+Coloma+de+Cervell%C3%B3!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Myker Academy"
                className="grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
