import HomePage from './pages/home';
import AboutPage from './pages/about';
import SkillsPage from './pages/skills';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/skills',
    component: SkillsPage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
];

export default routes;