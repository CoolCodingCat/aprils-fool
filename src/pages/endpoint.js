import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const FishPage = () => (
  <Layout>
    <section className="fish">
      <div className="cta-content">
        <div className="container">
          <h2>
            Nan, mais sérieux.
            <br />
            
          </h2>
          <h3>Vous avez cliqué !</h3>
          <h3>Un 1er avril ?!??!!!</h3>
          <h4>Promis, on le répètera pas</h4>
            <Link className="btn btn-outline btn-xl" to="/">
              Retour accueil
            </Link>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <Footer />
  </Layout>
);

export default FishPage;