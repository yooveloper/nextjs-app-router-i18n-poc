'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';

const DuoContainer = () => {

  const t = useTranslations('duo');

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='font-bold text-6xl'>{t('duo.page')}</h1>
    </div>
  )
};

export default DuoContainer;
