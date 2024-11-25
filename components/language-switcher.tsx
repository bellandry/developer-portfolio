'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('fr')}
      >
        FR
      </Button>
    </div>
  );
}
