'use client';

import cn from "classnames";

import { Logo as LogoIcon } from "./Icons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import ActiveLink from "./ActiveLink";

type HeaderProps = {
  className?: string;
}

function Header( { className }: HeaderProps ) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('header');

  return (
    <header className={cn(className, 'flex h-[72px] w-full px-8 py-4 bg-black border-b border-zinc-800 justify-start items-center')}>
      <ul className="flex justify-start items-center gap-6">
        <li>
          <ActiveLink href={`/${locale}`} locale={locale} pathname={pathname}>
            <LogoIcon />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={`/${locale}`} locale={locale} pathname={pathname}>
            <p>{t('header.home')}</p>  
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={`/${locale}/duo`} locale={locale} pathname={pathname}>
            <p>{t('header.duo')}</p>  
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={`/${locale}/mercenary`} locale={locale} pathname={pathname}>
            <p>{t('header.mercenary')}</p>  
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={`/${locale}/playfolio`} locale={locale} pathname={pathname}>
            <p>{t('header.playfolio')}</p>  
          </ActiveLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;