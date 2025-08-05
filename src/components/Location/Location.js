import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import signature from "../../assets/signature.png";
import location from "../../assets/location.png";

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const myElementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Параметры наблюдения
    );

    if (myElementRef.current) {
      observer.observe(myElementRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={myElementRef}
      className={`location ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="location__wrapper">
          <h2 className="title location__title">Где?</h2>
          <div className="location__content">
            <div className="location__registration">
              <p className="text location__registration-text">
                Бракосочетание состоится в
              </p>
              <p className="text location__registration-text">
                ЗАГС - г. Пензе, ул. Минская, 1
              </p>
            </div>
            <img src={signature} alt="" className="image__signature" />
            <div className="location__banquet">
              <p className="text location__banquet-text">
                Торжество состоится в
              </p>
              <p className="text location__banquet-text">
                ресторане "Чо? Капчо!",
              </p>
              <p className="text location__banquet-text">
                г. Пенза, пр. Строителей, 39В
              </p>
              <img src={location} alt="" className="image__location" />
              <div className="location__map">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A4e6ffa59a3a38fe8c5ff4544260b2d366d9db0fa49683cf52e9c1fe7004ca863&amp;source=constructor"
                  width="475"
                  height="330"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
