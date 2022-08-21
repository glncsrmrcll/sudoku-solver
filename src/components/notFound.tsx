import { useTranslation } from 'react-i18next';

export default function NotFound(): JSX.Element {
  const { t } = useTranslation();
  return <div className="text-3xl">{t('notFound')}</div>;
}
