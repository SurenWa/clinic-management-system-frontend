import { lazy } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
// import AuthenticationRoutes from './AuthenticationRoutes';
import Loadable from 'ui-component/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/pages/Landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // eslint-disable-next-line no-undef
    return useRoutes([{ path: '/', element: <PagesLanding /> }, LoginRoutes, MainRoutes]);
}
