import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import TEXTS from '../shared/texts/TEXTS';
import { useRecoilState } from 'recoil';
import { languageState } from '../shared/state/atoms';

const PageLayout = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>{TEXTS.menu.home[language]}</Link>
            </li>
            <li>
              <Link to='/todos'>{TEXTS.menu.todos[language]}</Link>
            </li>
            <li>
              <ul>
                <li onClick={() => changeLanguage('lt')}>
                  {TEXTS.menu.language.lithuanian[language]}
                </li>
                <li onClick={() => changeLanguage('en')}>
                  {TEXTS.menu.language.english[language]}
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default PageLayout;
