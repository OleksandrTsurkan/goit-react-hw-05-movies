import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutHeader, LayoutMainText, LayoutNav } from './Layout.styled';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <LayoutHeader>
        <LayoutMainText>Find your movie</LayoutMainText>
        <LayoutNav>
          <NavLink className={css.NavLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.NavLink} to="/movies">
            Movies
          </NavLink>
        </LayoutNav>
      </LayoutHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;