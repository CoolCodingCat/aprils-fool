import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/visuel-1.png';
import demo2 from '../assets/images/visuel-2.png';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5 notSoBig">
                Le SaveurCoin est une monnaie virtuelle basée sur le protocol Ethereum. Le moyen idéal pour sécuriser vos transactions avec votre boulangerie préférée :<br/> Aux Saveurs de la Tour
              </h1>
              <div type="id">
              <a href="/endpoint" className="btn btn-outline btn-xl">
                  Je crée mon Wallet !
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Découvrez pourquoi tout le monde en parle
            </h2>
            <p>
              Notre application est disponible ! Téléchargez là pour demarrer
            </p>
            <div className="badges">
              <a className="badge-link" href="/endpoint">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/endpoint">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="secu">Sécurisé et infalsifiable</h2>
          <p className="text-muted">
            Vos courses ne seront plus jamais comme avant
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo2} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3 className="secu">Sécurisé</h3>
                    <p className="text-muted">
                      Le protocole P2P Ethereum vous garantit une trace infalsifiable, confirmée par les ordinateurs du monde entier, pour prouver que vous avez pensé à acheter votre <strong>baguette Parisse</strong>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3 className="secu">Irréfutable</h3>
                    <p className="text-muted">
                      Si on vous accuse d'avoir mangé les croissants en cours de route, vous pouvez prouver que vous avez oublié de les acheter
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3 className="secu">Simple</h3>
                    <p className="text-muted">
                      Grâce à votre clé de cryptage de 32 caractères, à fournir à la caisse, en plus de votre application dévérouillée par reconnaissance faciale et corroborée par votre pièce d'identité certifiée conforme par le Grand Consul, vous aurez accès à la partie viennoiseries sur invitation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3 className="secu">Pratique</h3>
                    <p className="text-muted">
                      L'ajout de votre transaction sur la blockchain ne prend pas plus de 20 minutes. Gain de temps évident.<br/> (note : vous pourrez sortir du magasin immédiatement après cette validation)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            SaveurCoin
            <br />
            La nouvelle ère de la boulangerie
          </h2>
          <div type="id">
            <a href="/endpoint" className="btn btn-outline btn-xl">
              On démarre !
            </a>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          On 
          <i className="fas fa-heart"></i>
            les bitcoins et le chocolat !
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
