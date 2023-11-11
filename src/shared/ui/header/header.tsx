import React, { ReactNode } from 'react';
import { Layout } from 'antd';

interface HeaderProps {
 children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
 return <Layout.Header>{children}</Layout.Header>;
};
