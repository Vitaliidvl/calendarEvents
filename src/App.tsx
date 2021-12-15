import { Layout } from 'antd';
import React from 'react';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/NavBar';
import './App.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

export const App: React.FC = () => {
  const { setUser, setIsAuth } = useActions();

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, [setUser, setIsAuth]);

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};
