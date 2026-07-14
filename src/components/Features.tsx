import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Lock, Users, Network, MapPin, Settings, Smartphone, Sliders } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Volume2 className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature1Title'),
      description: t('feature1Desc')
    },
    {
      icon: <Lock className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature2Title'),
      description: t('feature2Desc')
    },
    {
      icon: <Users className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature3Title'),
      description: t('feature3Desc')
    },
    {
      icon: <Network className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature4Title'),
      description: t('feature4Desc')
    },
    {
      icon: <MapPin className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature5Title'),
      description: t('feature5Desc')
    },
    {
      icon: <Settings className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature6Title'),
      description: t('feature6Desc')
    },
    {
      icon: <Smartphone className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature7Title'),
      description: t('feature7Desc')
    },
    {
      icon: <Sliders className="h-8 sm:h-12 w-8 sm:w-12" />,
      title: t('feature8Title'),
      description: t('feature8Desc')
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('featuresTitle')}</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">{t('featuresSubtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="text-phoenix-600 mb-4">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                src="https://ik.imagekit.io/8jn9lgbbcw/Phoenix%20Presents%20updated.mp4?updatedAt=1747656454333"
                autoPlay
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="testimonials-section overflow-hidden">
              <motion.div
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex gap-4 sm:gap-8"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4 sm:gap-8 min-w-full">
                    {[
                      {
                        text: "The audio quality and range are exceptional. It's transformed how our security team communicates.",
                        author: "John D., Security Manager"
                      },
                      {
                        text: "The GPS tracking feature has improved our fleet management significantly.",
                        author: "Sarah M., Operations Director"
                      },
                      {
                        text: "Easy to use and incredibly reliable. Best communication solution we've implemented.",
                        author: "Michael R., Site Supervisor"
                      }
                    ].map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex-1 min-w-[260px] sm:min-w-0"
                      >
                        <p className="text-sm sm:text-base text-gray-600 italic mb-4">{testimonial.text}</p>
                        <p className="text-sm sm:text-base text-gray-900 font-semibold">{testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
