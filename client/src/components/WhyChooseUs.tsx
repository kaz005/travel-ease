import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    'bestPrices',
    'support',
    'flexibility',
    'rewards'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('whyChooseUs.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 text-red-600">
                <CheckCircle className="w-8 h-8" />
              </div>
              <p className="text-gray-700">
                {t(`whyChooseUs.features.${feature}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
