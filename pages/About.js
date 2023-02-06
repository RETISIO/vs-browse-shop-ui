import React, { useEffect } from 'react';
import Link from 'next/link';
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';

export default function About() {
  const i18n = useI18n();

  const router = useRouter();

  useEffect(() => {
    async function changeLocale() {
      if (router.locale === 'en-US') {
        i18n.set('en-US', await import('../locales/en.json'));
        i18n.locale('en-US');
      } else if (router.locale === 'de') {
        i18n.set('de', await import('../locales/de.json'));
        i18n.locale('de');
      }
    }
    changeLocale();
  }, [router.locale]);
  return (
    <div>
      About Page
      <Link href="/">Home</Link>
    </div>
  );
}
