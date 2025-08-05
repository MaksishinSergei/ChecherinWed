import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import hands from "../../assets/hands.jpg";

export default function WeddingTimer() {
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
  const targetDate = new Date(2025, 8, 20).getTime();
  return (
    <section
      ref={myElementRef}
      className={`timer ${isVisible ? "visible" : ""}`}
    >
      <div className="background-container">
        <img src={hands} alt="Background" className="background-image" />
      </div>
      <div className="background-shadow"></div>
      <div className="container">
        <div className="timer__wrapper">
          <h2 className="title timer__date-title">20 СЕНТЯБРЯ 2025</h2>
          <h2 className="title timer__date-subtitle">ДО СВАДЬБЫ ОСТАЛОСЬ</h2>
          <Timer targetDate={targetDate} />
          <h2 className="title timer__date-subtitle--2">До скорой встречи!</h2>
        </div>
      </div>
    </section>
  );
}
function Timer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="timer__content">
      <div className={`timer__item timer__days ${animate ? "animate" : ""}`}>
        <p className="inter">{formatTime(timeLeft.days)}</p>

        <span className="timer__label">Дней</span>
      </div>
      <div className={`timer__item timer__hours ${animate ? "animate" : ""}`}>
        <p className="inter">{formatTime(timeLeft.hours)}</p>
        <span className="timer__label">Часов</span>
      </div>
      <div className={`timer__item timer__minutes ${animate ? "animate" : ""}`}>
        <p className="inter">{formatTime(timeLeft.minutes)}</p>
        <span className="timer__label">Минут</span>
      </div>
      <div className={`timer__item timer__seconds ${animate ? "animate" : ""}`}>
        <p className="inter">{formatTime(timeLeft.seconds)}</p>
        <span className="timer__label">Секунд</span>
      </div>
    </div>
  );
}
