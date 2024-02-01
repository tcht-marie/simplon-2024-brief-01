import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Subscriptions from '../components/Subscription';
import Footer from '../components/Footer';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Features />
      <Subscriptions />
    </main>
    <Footer />
  </>);
}
