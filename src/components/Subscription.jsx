import React from 'react';
import '../design/FeaturesAndSubscription.css';

export default function Subscriptions() {
  return (
    <section id="subscriptions" className="subscriptions">
            <h2>Abonnements</h2>
            <div className="subscription-container2">
                <div className="subscription">
                    <h3>Single</h3>
                    <p className="subscription-p">Solution idéale pour les débutants</p>
                    <p className="price">1€99</p>
                </div>
                <div className="subscription">
                    <h3>Premium</h3>
                    <p className="subscription-p">Solution idéale pour les sites web personnels</p>
                    <p className="price">2€99</p>
                </div>
                <div className="subscription">
                    <h3>Business</h3>
                    <p className="subscription-p">Augmentez votre niveau avec plus de puissance</p>
                    <p className="price">9€99</p>
                </div>
                <div className="subscription">
                    <h3>Startup</h3>
                    <p className="subscription-p">Profitez de performances optimisées et de ressources puissantes</p>
                    <p className="price">15€99</p>
                </div>
            </div>
        </section>
  );
}
