import company_logo_amazon from "../../../../../assets/images/hero/partners/company-logo.svg";
import company_logo_dribble from "../../../../../assets/images/hero/partners/company-logo-2.svg";
import company_logo_hubspot from "../../../../../assets/images/hero/partners/company-logo-3.svg";
import company_logo_netflix from "../../../../../assets/images/hero/partners/company-logo-5.svg";
import company_logo_notion from "../../../../../assets/images/hero/partners/company-logo-4.svg";
import company_logo_zoom from "../../../../../assets/images/hero/partners/company-logo-6.svg";

import hero_background from "../../../../../assets/images/hero/hero-background.svg";

export function HeroSection(): React.ReactElement {
  return (
    <section className="section section--hidden-x container">
      <div className="section__body">
        <div className="hero">
          <div className="hero__main">
            <div className="hero__body">
              <h1 className="hero__title">Navigating the digital landscape for success</h1>
              <div className="hero__description">
                <p>
                  Our digital marketing agency helps businesses grow and succeed online through a range of
                  services including SEO, PPC, social media marketing, and content creation.
                </p>
              </div>
              <button className="hero__button button">Book a consultation</button>
            </div>
            <img
              className="hero__image"
              src={hero_background}
              alt=""
              height="515"
              width="600"
              loading="lazy"
            />
          </div>
          <div className="hero__partners">
            <h2 className="visually-hidden">Our partners</h2>
            <ul className="hero__partners-list">
              <li className="hero__partners-item">
                <img
                  className="hero__partners-image"
                  src={company_logo_amazon}
                  alt="amazon"
                  loading="lazy"
                  height="48"
                  width="130"
                />
              </li>
              <li className="hero__partners-item">
                <img
                  className="hero__partners-image"
                  src={company_logo_dribble}
                  alt="dribble"
                  loading="lazy"
                  height="48"
                  width="130"
                />
              </li>
              <li className="hero__partners-item">
                <img
                  className="hero__partners-image"
                  src={company_logo_hubspot}
                  alt="hubspot"
                  loading="lazy"
                  height="48"
                  width="130"
                />
              </li>
              <li className="hero__partners-item">
                <img
                  className="hero__partners-image"
                  src={company_logo_notion}
                  alt="notion"
                  loading="lazy"
                  height="48"
                  width="130"
                />
              </li>
              <li className="hero__partners-item">
                <img
                  className="hero__partners-image"
                  src={company_logo_netflix}
                  alt="netflix"
                  loading="lazy"
                  height="48"
                  width="130"
                />
              </li>
              <li className="hero__partners-item">
                <img
                  className="hero__partners-image"
                  src={company_logo_zoom}
                  alt="zoom"
                  loading="lazy"
                  height="48"
                  width="130"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
