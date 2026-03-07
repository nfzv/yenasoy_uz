"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function Services() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const categoryIcons = [
    // Reactive Support
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Planned Engineering
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>,
    // New Development
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    // Documentation
    <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    // Additional Options
    <svg key="5" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>,
  ];

  return (
    <section id="services" className="py-20 relative">
      <div
          className="absolute inset-0 -z-1 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
          }}
        />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image Banner */}
        <div className="relative mb-16 rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[300px] sm:h-[350px]">
            <Image
              src="/covers/conveyor_line_orange_juice_bottles.png"
              alt="Production line automation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/60 via-gray-900/50 to-cyan-800/40" />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {t.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-2xl drop-shadow-md">
              {t.services.subtitle}
            </p>
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-12">
          {t.services.categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-cyan-800 to-cyan-700 px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 rounded-lg text-white">
                    {categoryIcons[catIndex]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-cyan-100 text-sm mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Items */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 rounded-xl bg-teal-50/10 hover:bg-cyan-50 transition-colors border border-gray-200 shadow-xs hover:border-cyan-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                        <svg className="w-5 h-5 text-cyan-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm pl-7">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact for Pricing */}
                {/* <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-cyan-800 hover:text-cyan-900 font-medium transition-colors"
                  >
                    {t.services.contactForPricing}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
