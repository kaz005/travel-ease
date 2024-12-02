import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.about.title')}</h3>
          <p className="text-gray-400">{t('footer.about.description')}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.quickLinks.aboutUs')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.quickLinks.contactUs')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.quickLinks.terms')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.quickLinks.privacy')}</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
          <address className="text-gray-400 not-italic">
            <p>{t('footer.contact.address')}</p>
            <p>{t('footer.contact.phone')} +1 234 567 890</p>
            <p>{t('footer.contact.email')} info@travelease.com</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
