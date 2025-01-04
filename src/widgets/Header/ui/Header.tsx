import React from "react";
import logo from "../../../assets/images/positivus-svg.svg";

export function Header(): React.ReactElement {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="header__logo logo" href="#">
          <img className="logo__image" src={logo} alt="Positivus" width="150" loading="lazy" />
        </a>
        <nav className="header__menu hidden-mobile">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                About us
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Services
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Use Cases
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Pricing
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button button button--transparent hidden-mobile" type="button">
          Request a quote
        </button>
        <button className="header__burger-button burger-button visible-mobile" type="button">
          <span className="visually-hidden">Open navigation menu</span>
        </button>
      </div>
    </header>
  );
}
