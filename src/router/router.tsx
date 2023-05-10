import App from '@components/App';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import LoginComponent from 'src/page/Login';

const routes: RouteObject[] = [
  {
    path: '/login',
    Component: LoginComponent,
  },
  {
    path: '*',
    element: App(),
  },
];
const router = createBrowserRouter(routes);

export default router;
