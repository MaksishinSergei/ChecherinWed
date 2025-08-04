import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import newlyweds from "../../assets/newlyweds.jpg";
import heart from "../../assets/heart.png";

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
    <section
      ref={myElementRef}
      className={`subheader ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="subheader__wrapper">
          <div className="subheader__text-block">
            <p className="text subheader__title">Да-да, это мы!</p>
            <p className="text subheader__text">
              Время летит так быстро, представляете?
            </p>
            <p className="text subheader__text">
              И вот мы повзрослели и приняли решение, что пора создавать семью!
            </p>
          </div>
          <div className="subheader__img-content">
            {/*<div className="subheader__bride-container">
              <img src={bride_2} alt="" className="image__bride-2" />
            </div>
            <div className="subheader__groom-container">
              <img src={groom_2} alt="" className="image__groom-2" />
            </div>*/}
            <div className="subheader__newlyweds">
              <img src={newlyweds} alt="" className="image__newlyweds" />
            </div>
          </div>
          <div className="subheader__names">
            <div className="subheader__names-text">
              <p className="name-1">Артем</p>
              <p className="name-2">+</p>
              <p className="name-3">Даша</p>
            </div>
            <h2 className="subheader__names-res">=</h2>
            <img src={heart} alt="" className="image_heart" />
          </div>
        </div>
      </div>
    </section>
  );
}
