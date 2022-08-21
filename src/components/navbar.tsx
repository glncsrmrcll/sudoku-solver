import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  const { t } = useTranslation();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-6 px-20 w-full text-white mr-6">
      <NavLink to="" className="font-semibold text-xl tracking-tight">
        {t('title')}
      </NavLink>
      <NavLink
        to="solve"
        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  lg:mt-0"
      >
        {t('callToAction')}
      </NavLink>
    </nav>
  );
}
