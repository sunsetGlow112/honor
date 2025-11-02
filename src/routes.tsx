import Home from './pages/Home';
import Tip from './pages/Tip';
import HeroSelect from './pages/HeroSelect';
import HeroDetail from './pages/HeroDetail';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '主界面',
    path: '/',
    element: <Home />,
    visible: false,
  },
  {
    name: '提示界面',
    path: '/tip',
    element: <Tip />,
    visible: false,
  },
  {
    name: '英雄选择',
    path: '/hero-select',
    element: <HeroSelect />,
    visible: false,
  },
  {
    name: '英雄详情',
    path: '/hero-detail/:heroId',
    element: <HeroDetail />,
    visible: false,
  },
];

export default routes;