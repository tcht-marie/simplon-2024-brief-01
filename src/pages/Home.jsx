import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Features />
      <Subscription />
    </main>
    <Footer />
  </>);
}
