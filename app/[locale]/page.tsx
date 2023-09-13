'use client'

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('home');

  const userName = 'Won Young'

  return (
    <main className="flex flex-col">
      <div className="flex gap-4">
        <Link href="/products">{t('links.products')}</Link>
        <Link href="/contact">{t('links.contact')}</Link>
      </div>
      <h1>{t('header', { name: userName })}</h1>
    </main>
  )
}
