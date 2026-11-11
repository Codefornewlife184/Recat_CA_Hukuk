import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../i18n/LocaleContext.jsx";
import { translateNumbers } from "../utils/numberConverter.js";
import { getWhatsappUrl, siteInfo } from "../data/siteInfo.js";
import { getServices } from "../data/servicesContent.js";

// Her kelimenin ilk harfini büyük, diğerlerini küçük yapan Türkçe uyumlu fonksiyon
function toTitleCase(value = "") {
  return String(value)
    .trim()
    .split(/\s+/)
    .map((word) => {
      if (!word) return "";
      const firstChar = word.charAt(0);
      let upperFirst = firstChar;

      // Türkçe 'i' harfi büyük 'İ' dönüşümü
      if (firstChar === "i") upperFirst = "İ";
      else if (firstChar === "ı") upperFirst = "I";
      else upperFirst = firstChar.toLocaleUpperCase("tr-TR");

      return upperFirst + word.slice(1).toLocaleLowerCase("tr-TR");
    })
    .join(" ");
}

function ArrowIcon() {
  return (
    <svg
      className="footer-service-arrow"
      viewBox="0 0 24 24"
      width="13"
      height="13"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const { locale, t, localizePath } = useLocale();
  const services = useMemo(() => getServices(locale), [locale]);
  const footerPhones = siteInfo.phones || [];

  const scrollToTop = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const scrollTargets = [
      document.scrollingElement,
      document.documentElement,
      document.body,
      document.getElementById("antra-smooth-content"),
      document.getElementById("antra-smooth-wrapper"),
    ].filter(Boolean);

    try {
      const smoother =
        window.ScrollSmoother &&
        window.ScrollSmoother.get &&
        window.ScrollSmoother.get();

      if (smoother && typeof smoother.scrollTo === "function") {
        smoother.scrollTo(0, true);
      }
    } catch (error) {}

    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      window.scrollTo(0, 0);
    }

    scrollTargets.forEach((target) => {
      try {
        target.scrollTop = 0;
      } catch (error) {}

      try {
        if (typeof target.scrollTo === "function") {
          target.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch (error) {
        try {
          if (typeof target.scrollTo === "function") {
            target.scrollTo(0, 0);
          }
        } catch (innerError) {}
      }
    });

    requestAnimationFrame(() => {
      try {
        window.scrollTo(0, 0);
      } catch (error) {}

      scrollTargets.forEach((target) => {
        try {
          target.scrollTop = 0;
        } catch (error) {}
      });
    });

    setTimeout(() => {
      try {
        window.scrollTo(0, 0);
      } catch (error) {}

      scrollTargets.forEach((target) => {
        try {
          target.scrollTop = 0;
        } catch (error) {}
      });
    }, 180);
  };

  return (
    <>
      <footer className="footer-section footer-law-background overflow-hidden">
        <div className="footer-shade" aria-hidden="true"></div>

        <div className="container container-2 footer-content">
          <div className="row footer-wrap">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-col-2">
                <h5 className="footer-heading">{t.footer.corporateTitle}</h5>
                <br />

                <ul className="footer-list mt-3">
                  <li>
                    <Link to={localizePath("/")}>{t.nav.home}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/hakkimizda")}>{t.nav.about}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/ekibimiz")}>{t.nav.team}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/hizmetlerimiz")}>{t.nav.services}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/referanslar")}>{t.nav.references}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/makaleler")}>{t.nav.articles}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/kvkk")}>{t.nav.kvkk}</Link>
                  </li>
                  <li>
                    <Link to={localizePath("/cerez-politikasi")}>
                      {t.nav.cookiePolicy}
                    </Link>
                  </li>
                  <li>
                    <Link to={localizePath("/yasal-uyari")}>
                      {t.nav.legalNotice}
                    </Link>
                  </li>
                  <li>
                    <Link to={localizePath("/iletisim")}>{t.nav.contact}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="footer-widget footer-col-services">
                <h5 className="footer-heading footer-heading-center mb-3">
                  {t.footer.servicesTitle}
                </h5>
                <br />

                <ul className="footer-list footer-services-list">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={localizePath(`/hizmetlerimiz/${service.slug}`)}
                        className="footer-service-link"
                      >
                        <ArrowIcon />
                        <span className="footer-service-text">
                          {toTitleCase(service.title)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-1">
              <div className="footer-widget footer-col-services">
                <div className="footer-address">
                  <h5 className="footer-heading">{t.footer.contactTitle}</h5>
                  <br />

                  <div className="footer-address-text mt-3 text-white">
                    <span>
                      Adres : Ruzi Plaza <br/>Konak Mah. Kudret Sk. <br/>No: 20, Kat: 2, İç Kapı
                      No: 1, 16210 <br/>Nilüfer / BURSA
                    </span>
                  </div>
                  <br/>
                  {footerPhones.map((phone) => (
                    <a
                      key={phone.href}
                      className="footer-address-text footer-contact-link mt-3 text-white"
                      href={phone.href}
                    >
                      Gsm : {translateNumbers(phone.display, locale)}
                    </a>
                  ))}
                  <br/>
                  <a
                    className="footer-address-text footer-contact-link mt-3 text-white"
                    href={`mailto:${siteInfo.email.toLowerCase()}`}
                  >
                    <span className="footer-mail-text">
                      E-Mail : {siteInfo.email.toLowerCase()}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-content">
              <p>
                ©{translateNumbers("2026", locale)} {siteInfo.brand}
              </p>
              <p>{t.footer.rights}</p>
              <p>
                {t.footer.webDesign}{' '}
                <a
                  href="https://webcenter.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Web Center"
                  className="footer-credit-link"
                >
                  Web Center
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <button
        id="scroll-percentage"
        type="button"
        aria-label={
          locale === "ar"
            ? "العودة إلى أعلى الصفحة"
            : locale === "en"
              ? "Back to top"
              : "Sayfanın başına dön"
        }
        onClick={scrollToTop}
        onTouchEnd={scrollToTop}
      >
        <span id="scroll-percentage-value"></span>
      </button>

      <a
        id="whatsapp-fab"
        href={getWhatsappUrl()}
        aria-label="WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="wp-hover-text">{t.cta.contactLong}</span>
      </a>

      <style>{`
        .footer-section.footer-law-background {
          position: relative;
          isolation: isolate;
          background-image: url('/assets/img/law/footer.webp') !important;
          background-size: cover;
          background-position: center center !important;
          background-repeat: no-repeat;
          padding-top: 0px !important;
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }

        .footer-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: rgba(7, 20, 39, 0.82);
          pointer-events: none;
        }

        .footer-content,
        .copyright-area {
          position: relative;
          z-index: 1;
        }

        .footer-heading {
          color: #cca645 !important;
          margin-bottom: 0;
        }

        .footer-heading-center {
          display: block;
          width: 93%;
          text-align: center;
        }

        .footer-col-services {
          width: 100%;
        }

        .footer-list {
          display: grid;
          gap: 14px;
        }

        .footer-list li {
          line-height: 1.2;
        }

        .footer-list li a {
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          text-decoration: none;
        }

        .footer-services-list li a.footer-service-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-transform: none;
          transition: color 0.3s ease;
          white-space: normal;
          line-height: 1.45;
        }

        .footer-services-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 34px;
          row-gap: 12px;
          align-items: start;
        }

        .footer-services-list li {
          width: 100%;
        }

        .footer-services-list li a.footer-service-link {
          width: 100%;
        }

        .footer-service-text {
          transition: transform 0.3s ease;
        }

        .footer-service-arrow {
          flex: 0 0 auto;
          color: #cca645 !important;
          transform: translateX(0);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-services-list li a.footer-service-link:hover,
        .footer-services-list li a.footer-service-link:focus-visible {
          color: #cca645 !important;
        }

        .footer-services-list li a.footer-service-link:hover .footer-service-arrow,
        .footer-services-list li a.footer-service-link:focus-visible .footer-service-arrow {
          transform: translateX(5px);
        }

        .footer-services-list li a.footer-service-link:hover .footer-service-text,
        .footer-services-list li a.footer-service-link:focus-visible .footer-service-text {
          transform: translateX(2px);
        }

        .footer-credit-link {
          color: #10adad!important;
          font-weight: 700;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          white-space: normal;
          line-height: 1.7;
        }

        .footer-address-text {
          display: inline-flex;
          align-items: flex-start;
          gap: 6px;
        }

        .footer-mail-text {
          direction: ltr;
          unicode-bidi: plaintext;
          white-space: normal;
          word-break: break-all;
        }

        body.cah-overlay-open #whatsapp-fab,
        body.cah-overlay-open #scroll-percentage {
          display: none !important;
        }

        #scroll-percentage {
          left: 24px !important;
          bottom: 24px !important;
          width: 56px !important;
          height: 56px !important;
        }

        #whatsapp-fab {
          position: fixed !important;
          right: 24px !important;
          bottom: 24px !important;
          width: 56px !important;
          min-width: 56px !important;
          height: 56px !important;
          border-radius: 50px !important;
          background: #cca645 !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0 !important;
          padding: 0 18px !important;
          box-shadow: 0 8px 24px rgba(204, 166, 69, 0.28) !important;
          text-decoration: none !important;
          overflow: hidden !important;
          white-space: nowrap !important;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
          z-index: 9999 !important;
        }

        #whatsapp-fab i {
          color: #ffffff !important;
          font-size: 29px !important;
          line-height: 1 !important;
          flex-shrink: 0 !important;
        }

        #whatsapp-fab .wp-hover-text {
          max-width: 0 !important;
          opacity: 0 !important;
          margin-left: 0 !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #ffffff !important;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
          overflow: hidden !important;
        }

        #whatsapp-fab:hover {
          width: auto !important;
          min-width: 56px !important;
          background: #25d366 !important;
          box-shadow: 0 8px 22px rgba(37, 211, 102, 0.42) !important;
          transform: translateY(-3px) !important;
        }

        #whatsapp-fab:hover .wp-hover-text {
          max-width: 220px !important;
          opacity: 1 !important;
          margin-left: 10px !important;
        }

        @media (max-width: 768px) {
          .footer-services-list {
            grid-template-columns: 1fr;
            column-gap: 0;
          }

          #scroll-percentage {
            left: 16px !important;
            bottom: 16px !important;
            width: 52px !important;
            height: 52px !important;
          }

          #whatsapp-fab {
            right: 16px !important;
            bottom: 16px !important;
            width: 52px !important;
            min-width: 52px !important;
            height: 52px !important;
            padding: 0 !important;
          }

          #whatsapp-fab i {
            font-size: 24px !important;
          }

          #whatsapp-fab:hover {
            width: 52px !important;
            transform: none !important;
          }

          #whatsapp-fab:hover .wp-hover-text {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-services-list li a.footer-service-link,
          .footer-service-text,
          .footer-service-arrow {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
