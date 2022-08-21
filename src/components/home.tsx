import React from 'react';
import { useTranslation } from 'react-i18next';
import LoremText from './common/loremText';
import SubscribeForm from './subscribeForm';

export default function Home(): JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <h1 className="my-6 text-3xl">{t('title')}</h1>
      <LoremText></LoremText>
      <LoremText></LoremText>
      <LoremText></LoremText>
      <SubscribeForm t={t} i18n={i18n} tReady={false}></SubscribeForm>
    </React.Fragment>
  );
}
