import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import cloud from "../../assets/cloud.png";
import bride from "../../assets/bride.jpg";
import groom from "../../assets/groom.jpg";

export default function Header() {
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
    <header
      ref={myElementRef}
      className={`header ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="header__wrapper">
          <div className="header__content">
            <div className="header__img-bride">
              <div className="header__bride-cloud">
                <img src={cloud} alt="" className="image__cloud" />
              </div>
              <div className="header__bride-container">
                <img src={bride} alt="" className="image__bride" />
              </div>
            </div>
            <div className="header__img-groom">
              <span class="corner corner-1"></span>
              <img src={groom} alt="" className="image__groom" />
              <span class="corner corner-2"></span>
            </div>
          </div>
          <h1 className="title header__title">Узнали этих ребятишек?</h1>
        </div>
      </div>
    </header>
  );
}
