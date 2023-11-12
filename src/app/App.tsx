import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { Home } from '@/pages/home';
import 'antd/dist/reset.css';
import './index.css';

export function App(): JSX.Element {
 return (
  <StyleProvider hashPriority='high'>
   <Home />
  </StyleProvider>
 );
}
