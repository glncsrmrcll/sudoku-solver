import { useTranslation } from 'react-i18next';

export default function LoremText(): JSX.Element {
  const { t } = useTranslation();
  return <p className="text-lg text-justify my-4">{t('lorem')}</p>;
}
