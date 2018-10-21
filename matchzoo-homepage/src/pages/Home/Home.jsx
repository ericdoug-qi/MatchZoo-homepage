import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import IceworksInfo from './components/IceworksInfo';
import DesignLanguage from './components/DesignLanguage';
import Materials from './components/Materials';
import BrandList from './components/BrandList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page" style={{ background: '#fff' }}>
        <Header />
        <LandingIntroBanner />
        <IceworksInfo />
        {/* <DesignLanguage /> */}
        <Materials />
        <BrandList />
        <Footer />
      </div>
    );
  }
}
