"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

    const classIcons = [
    // S - Simple
    <span key="s" className="w-8 h-8 flex items-center justify-center text-cyan-800 font-bold text-lg">S</span>,

    // M - Medium
    <span key="m" className="w-8 h-8 flex items-center justify-center text-cyan-800 font-bold text-lg">M</span>,
    // L - Complex
    <span key="l" className="w-8 h-8 flex items-center justify-center text-cyan-800 font-bold text-lg">L</span>,
    // XL - High-Complexity
    <span key="xl" className="w-8 h-8 flex items-center justify-center text-cyan-800 font-bold text-lg">XL</span>,
  ];

  return (
    <section id="about" className="py-20 relative inset-shadow-xl">
  {/* Diagonal Stripes Background */}
    <div
      className="absolute inset-0 -z-1  pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Company - With Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/covers/two_workers_operating_the_line_faceshot_closeup.jpg"
              alt="Professional automation engineers at work"
              fill
              className="object-cover"
            />
            {/* Accent border */}
            <div className="absolute inset-0 border-4 border-cyan-800/20 rounded-2xl" />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-800 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t.about.description}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-800">S-XL</div>
                <div className="text-sm text-gray-600 mt-1">
                  {language === "ru" ? "Классы систем" : language === "uz" ? "Tizim sinflari" : "System classes"}
                </div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-800">24/7</div>
                <div className="text-sm text-gray-600 mt-1">
                  {language === "ru" ? "Поддержка" : language === "uz" ? "Qo'llab-quvvatlash" : "Support"}
                </div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-xl">
                <div className="text-3xl font-bold text-cyan-800">100%</div>
                <div className="text-sm text-gray-600 mt-1">
                  {language === "ru" ? "Качество" : language === "uz" ? "Sifat" : "Quality"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Classes */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t.about.systemClasses.title}
            </h3>
            <p className="text-gray-600">
              {t.about.systemClasses.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.systemClasses.classes.map((cls, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-50 rounded-lg text-cyan-800">
                    {classIcons[index]}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{cls.name}</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-cyan-800 mb-1">
                      {language === "ru" ? "Размер:" : language === "uz" ? "Hajmi:" : "Size:"}
                    </p>
                    <p className="text-sm text-gray-600">{cls.size}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cyan-800 mb-1">
                      {language === "ru" ? "Особенности:" : language === "uz" ? "Xususiyatlari:" : "Features:"}
                    </p>
                    <p className="text-sm text-gray-600">{cls.features}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
