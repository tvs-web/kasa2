import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Logo from '../../assets/LOGO.png';
import Logow from '../../assets/.LOGOwhite.png';
import Prest from '../../Utils/prestation.json';
import Collapse from '../../Components/Collapse/Collapse';
import '../../Components/Collapse/Collapse.scss';
export default function About() {
  return (
    <div className="about">
      <Header
        headerLogo={Logo}
        headerAlt="kasa"
        headerNav1="Accueil"
        headerNav2="A propos"
      />{' '}
      <Banner />
      <>
        {Prest.map(({ id, text, title }) => (
          // eslint-disable-next-line react/style-prop-object
          <Collapse key={id} title={title} text={text} style="about" />
        ))}
      </>
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />{' '}
    </div>
  );
}
