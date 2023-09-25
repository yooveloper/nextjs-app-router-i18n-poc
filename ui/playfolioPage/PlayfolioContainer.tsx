'use client';

import { useTranslations } from 'next-intl';

const PlayfolioContainer = () => {

  const t = useTranslations('playfolio');

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='font-bold text-6xl'>{t('playfolio.page')}</h1>
    </div>
  )
};

export default PlayfolioContainer;
