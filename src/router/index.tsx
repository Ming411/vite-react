import React, {lazy} from 'react';
import {Navigate} from 'react-router-dom';
const About = lazy(() => import('@/views/About'));
const Page1 = lazy(() => import('@/views/Page1'));
const Page2 = lazy(() => import('@/views/Page2'));
import Home from '@/views/Home';
// import About from '@/views/About';

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);

const routes = [
  {
    path: '/',
    element: <Navigate to='/page1' />
  },
  {
    path: '/',
    element: <Home />, // 这里一般是布局组件
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />)
      }
    ]
  },
  {
    path: '/about',
    element: withLoadingComponent(<About />)
  }
];

export default routes;
