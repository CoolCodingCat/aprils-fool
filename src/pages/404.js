import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const notFound = () => (
  <Layout>
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Hé Ho ! <br/>Y'a rien ici
            <br />
            
          </h2>
          <h4>Erreur 404 pour les intimes</h4>
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

export default notFound;
