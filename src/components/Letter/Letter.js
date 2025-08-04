import React, { useState, useEffect, useRef, useCallback } from "react";
import heart from "../../assets/heart.png";
import "./style.css";

export default function Letter({ toggleOffLetter }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const myElementRef = useRef(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      toggleOffLetter();
    }, 500);
  }, [toggleOffLetter]);

  // Закрытие по ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  // Запрещаем скролл при открытом письме
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    const timer = setTimeout(() => {
      setIsClosing(true);
      handleClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [handleClose]);

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
    <div
      className={`letter__modal ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        ref={myElementRef}
        className={`letter__wrapper ${isVisible ? "visible" : ""} ${
          isClosing ? "closing" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
          <p>Вы приглашены</p>
          <p>на свадьбу</p>
          <img src={heart} alt="" className="letter__img" />
        </div>
      </div>
    </div>
  );
}
