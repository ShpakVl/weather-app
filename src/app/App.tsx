import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import 'antd/dist/reset.css';
import { Home } from '@/pages/home';

export function App(): JSX.Element {
 return (
  <StyleProvider hashPriority='high'>
   <Home />
  </StyleProvider>
 );
}
