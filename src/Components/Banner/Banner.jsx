import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.scss';
export default function Banner() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="banner">
      <div className={pathname === '/kasa' ? 'kasa' : 'about'}>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
}
