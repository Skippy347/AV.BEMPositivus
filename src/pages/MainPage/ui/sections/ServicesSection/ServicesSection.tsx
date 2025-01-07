import frame_bg from "../../../../../assets/images/hero/services/frame-bg.svg";
import llustration from "../../../../../assets/images/hero/services/Illustration.svg";
import llustration_2 from "../../../../../assets/images/hero/services/Illustration-2.svg";
import llustration_3 from "../../../../../assets/images/hero/services/Illustration-3.svg";
import llustration_4 from "../../../../../assets/images/hero/services/Illustration-4.svg";
import llustration_5 from "../../../../../assets/images/hero/services/Illustration-5.svg";
import llustration_6 from "../../../../../assets/images/hero/services/Illustration-6.svg";

export function ServicesSection(): React.ReactElement {
  return (
    <section className="section container">
      <header className="section__header">
        <h2 className="section__title puddle-bg">Services</h2>
        <div className="section__description">
          <p>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed
            online. These services include:
          </p>
        </div>
      </header>
      <div className="section__body">
        <div className="services">
          <ul className="services__list">
            <li className="services__item">
              <article className="service-card ">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg">Search engine optimization</span>
                    <span className="puddle-bg">optimization</span>
                  </h3>
                  <a className="service-card__link" href="#">
                    <span className="service-card__link-icon-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </span>
                    <span className="service-card__link-label">Learn more</span>
                  </a>
                </div>
                <img
                  className="service-card__image"
                  src={llustration}
                  alt=""
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card-accent-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">Pay-per-click</span>
                    <span className="puddle-bg puddle-bg--light">advertising</span>
                  </h3>
                  <a className="service-card__link" href="#">
                    <span className="service-card__link-icon-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </span>
                    <span className="service-card__link-label">Learn more</span>
                  </a>
                </div>
                <img
                  className="service-card__image"
                  src={llustration_2}
                  alt=""
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card-dark-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">Social Media</span>
                    <span className="puddle-bg puddle-bg--light">Marketing</span>
                  </h3>
                  <a className="service-card__link service-card__link-light" href="#">
                    <span className="service-card__link-icon-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </span>
                    <span className="service-card__link-label">Learn more</span>
                  </a>
                </div>
                <img
                  className="service-card__image"
                  src={llustration_3}
                  alt=""
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg">Email</span>
                    <span className="puddle-bg">Marketing</span>
                  </h3>
                  <a className="service-card__link" href="#">
                    <span className="service-card__link-icon-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </span>
                    <span className="service-card__link-label">Learn more</span>
                  </a>
                </div>
                <img
                  className="service-card__image"
                  src={llustration_4}
                  alt=""
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card-accent-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">Content</span>
                    <span className="puddle-bg puddle-bg--light">Creation</span>
                  </h3>
                  <a className="service-card__link" href="#">
                    <span className="service-card__link-icon-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </span>
                    <span className="service-card__link-label">Learn more</span>
                  </a>
                </div>
                <img
                  className="service-card__image"
                  src={llustration_5}
                  alt=""
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
            <li className="services__item">
              <article className="service-card service-card-dark-bg">
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    <span className="puddle-bg puddle-bg--light">Analytics and </span>
                    <span className="puddle-bg puddle-bg--light">Tracking</span>
                  </h3>
                  <a className="service-card__link service-card__link--light" href="#">
                    <span className="service-card__link-icon-wrapper">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </span>
                    <span className="service-card__link-label">Learn more</span>
                  </a>
                </div>
                <img
                  className="service-card__image"
                  src={llustration_6}
                  alt=""
                  width="210"
                  height="170"
                  loading="lazy"
                />
              </article>
            </li>
          </ul>
          <div className="services__bunner">
            <div className="banner__inner">
              <div className="banner__body">
                <h3 className="bunner__title">Let’s make things happen</h3>
                <div className="bunner__description">
                  <p>
                    Contact us today to learn more about how our digital marketing services can help your
                    business grow and succeed online.
                  </p>
                </div>
                <button className="banner__button button">Get your free proposal</button>
              </div>
              <img className="banner__image" src={frame_bg} alt="" height="394" width="494" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
