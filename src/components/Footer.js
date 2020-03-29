import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Korrilis Digital 2020 - Restez Chez Vous</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/endpoint">Confidentialité</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">CGV</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
