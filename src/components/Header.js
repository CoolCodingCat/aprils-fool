import React, { Component } from 'react';
import config from '../../config';
import Scroll from './Scroll';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            {config.siteTitle}
          </a>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                >
                  <a className="nav-link" href="/endpoint">
                    Download
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                >
                  <a className="nav-link" href="/endpoint">
                    Features
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                >
                  <a className="nav-link" href="http://auxsaveursdelatour.fr/accueil/infos/">
                    Contact
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
