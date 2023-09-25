'use client';

import { useTranslations } from 'next-intl';

const MercenaryContainer = () => {

  const t = useTranslations('mercenary');

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='font-bold text-6xl'>{t('mercenary.page')}</h1>
    </div>
  )
};

export default MercenaryContainer;
