import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Error from '../Error/Error';
import Data from '../../Utils/data.json';
import Caroussel from '../../Components/Caroussel/Caroussel';
import Description from '../../Components/Description/Description';
import Logo from '../../assets/LOGO.png';
import Logow from '../../assets/.LOGOwhite.png';
import './apartments.scss';
import Collapse from '../../Components/Collapse/Collapse';
export default function Apartments() {
  const { id } = useParams();
  const item = Data.find((data) => data.id === id);
  if (!item) {
    return <Error />;
  }

  return (
    <div className="apartments">
      <Header
        headerLogo={Logo}
        headerAlt="kasa"
        headerNav1="Accueil"
        headerNav2="A propos"
      />{' '}
      <Caroussel pictures={item.pictures} />
      <Description
        title={item.title}
        host={item.host}
        location={item.location}
        rating={item.rating}
        tags={item.tags}
      />
      <div className="toto">
        <Collapse
          title="Description"
          text={item.description}
          // eslint-disable-next-line react/style-prop-object
          style="apartments"
        />
        <Collapse
          title="Equipements"
          equipments={item.equipments}
          // eslint-disable-next-line react/style-prop-object
          style="apartments"
        />
      </div>
      <Footer
        footerLogo={Logow}
        footerAlt="kasa"
        footerCopyright="© 2020 Kasa. All rights reserved"
      />
    </div>
  );
}
