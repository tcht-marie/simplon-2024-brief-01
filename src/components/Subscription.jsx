import React from 'react';
import '../design/Subscription.css';

export default function Subscriptions() {
  return (
    <section class="subscriptions">
            <h2>Abonnements</h2>
            <div class="subscription-container2">
                <div class="subscription">
                    <h3>Single</h3>
                    <p class="subscription-p">Solution idéale pour les débutants</p>
                    <p class="price">1€99</p>
                </div>
                <div class="subscription">
                    <h3>Premium</h3>
                    <p class="subscription-p">Solution idéale pour les sites web personnels</p>
                    <p class="price">2€99</p>
                </div>
                <div class="subscription">
                    <h3>Business</h3>
                    <p class="subscription-p">Augmentez votre niveau avec plus de puissance</p>
                    <p class="price">9€99</p>
                </div>
                <div class="subscription">
                    <h3>Startup</h3>
                    <p class="subscription-p">Profitez de performances optimisées et de ressources puissantes</p>
                    <p class="price">15€99</p>
                </div>
            </div>
        </section>
  );
}
