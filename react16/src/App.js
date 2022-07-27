import React, { lazy, Suspense } from 'react';
import { BrowserRouter,Routes, Link, Route } from 'react-router-dom';
import { Divider } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';
// import LibVersion from './components/LibVersion';
// import HelloModal from './components/HelloModal';
import Layout from './components/Layout'

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));

const RouteWrapper = (Page) => {
  return (
    <Suspense fallback={<span>加载中</span>}>
      <Page />
    </Suspense>
  );
}

const RouteExample = () => {

  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react16' : '/'}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/test" element={<Home />} />
          <Route path="/about" element={RouteWrapper(About)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <Divider />
      <RouteExample />
    </div>
  );
}
