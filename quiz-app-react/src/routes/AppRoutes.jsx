import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { QuizSelection } from '../pages/QuizSelection/QuizSelection';
import { QuizPlay } from '../pages/QuizPlay/QuizPlay';
import { Results } from '../pages/Results/Results';
import { ROUTES } from '../constants/routes';

export const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.QUIZ_SELECTION} element={<QuizSelection />} />
        <Route path={ROUTES.QUIZ_PLAY} element={<QuizPlay />} />
        <Route path={ROUTES.RESULTS} element={<Results />} />
      </Routes>
    </Layout>
  );
};
