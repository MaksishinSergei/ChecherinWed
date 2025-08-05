import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import heart_calendar from "../../assets/heart__calendar-2.png";

export default function Date() {
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
      className={`date ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="date__wrapper">
          <h2 className="title date__title">Когда?</h2>
          <div className="date__content">
            <div className="date__text-block">
              <p className="text date__text">
                С большим волнением и радостью приглашаем вас стать частью
                одного из самых значимых событий в нашей жизни — нашей свадьбы!
              </p>
              <p className="text date__text">
                С тех пор как мы были детьми с мечтами о будущем, время
                пролетело так быстро. И вот, мы готовы начать новую главу
                вместе. Этот день будет отражением нашей любви и единства, и нам
                очень важно, чтобы вы были рядом с нами, чтобы разделить эту
                радость и счастье.
              </p>
            </div>
            <div className="text calendar__title">Сентябрь 2025</div>
            <div className="calendar__wrapper">
              <ul className="text calendar__week">
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
                <li>Вс</li>
              </ul>
              <ul className="text calendar__days">
                <li className="day">1</li>
                <li className="day">2</li>
                <li className="day">3</li>
                <li className="day">4</li>
                <li className="day">5</li>
                <li className="day">6</li>
                <li className="day">7</li>
                <li className="day">8</li>
                <li className="day">9</li>
                <li className="day">10</li>
                <li className="day">11</li>
                <li className="day">12</li>
                <li className="day">13</li>
                <li className="day">14</li>
                <li className="day">15</li>
                <li className="day">16</li>
                <li className="day">17</li>
                <li className="day">18</li>
                <li className="day">19</li>
                <li className="day">20</li>
                <li className="day">21</li>
                <li className="day">22</li>
                <li className="day">23</li>
                <li className="day">24</li>
                <li className="day">25</li>
                <li className="day">26</li>
                <li className="day">27</li>
                <li className="day">28</li>
                <li className="day">29</li>
                <li className="day">30</li>
              </ul>
              <img src={heart_calendar} alt="" className="date__heart" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
