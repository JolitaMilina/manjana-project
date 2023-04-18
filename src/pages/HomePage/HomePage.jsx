import TEXTS from '../../shared/texts/TEXTS';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../shared/state/atoms';

const HomePage = () => {
  const language = useRecoilValue(languageState);
  return (
    <section>
      <h1>{TEXTS.page.homePage.title[language]}</h1>
    </section>
  );
};

export default HomePage;
