import { Button } from "@/components/ui/button"
import { LanguageSelector } from "./LanguageSelector"
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">TravelEase</h1>
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <Button variant="ghost">{t('header.login')}</Button>
        <Button>{t('header.register')}</Button>
      </div>
    </header>
  );
}
