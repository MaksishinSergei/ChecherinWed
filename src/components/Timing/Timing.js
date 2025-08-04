import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import heart__punct from "../../assets/heart__calendar-2.png";

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
      className={`timing ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="timing__wrapper">
          <h2 className="title timing__title">Тайминг</h2>
          <ul className="timing__list">
            <li className="timing__list-item">
              <div className="item__content">
                <div className="item__title-wrap">
                  <img src={heart__punct} alt="" className="image__punct" />
                  <h3 className="title item__title">
                    15.00 - Сбор гостей на церемонию бракосочетания
                  </h3>
                </div>
                <p className="text item__text">
                  Желающих будем ожидать на торжественную церемонию в ЗАГСе
                </p>
              </div>
            </li>
            <li className="timing__list-item">
              <div className="item__content">
                <div className="item__title-wrap">
                  <img src={heart__punct} alt="" className="image__punct" />
                  <h3 className="title item__title">
                    15.20 - Торжественная церемония бракосочетания
                  </h3>
                </div>
                <p className="text item__text">
                  Станьте свидетелями важного события в нашей жизни
                </p>
              </div>
            </li>
            <li className="timing__list-item">
              <div className="item__content">
                <div className="item__title-wrap">
                  <img src={heart__punct} alt="" className="image__punct" />
                  <h3 className="title item__title">
                    16.00 - Сбор гостей на банкет
                  </h3>
                </div>
                <p className="text item__text">
                  Просим взять с собой хорошее настроение и улыбку
                </p>
              </div>
            </li>
            <li className="timing__list-item">
              <div className="item__content">
                <div className="item__title-wrap">
                  <img src={heart__punct} alt="" className="image__punct" />
                  <h3 className="title item__title">
                    16.30 - Встреча молодоженов в ресторане
                  </h3>
                </div>
                <p className="text item__text">
                  Не забудьте приветствовать нас радостными голосами и
                  аплодисментами
                </p>
              </div>
            </li>
            <li className="timing__list-item">
              <div className="item__content">
                <div className="item__title-wrap">
                  <img src={heart__punct} alt="" className="image__punct" />
                  <h3 className="title item__title">17.00 - Начало банкета</h3>
                </div>
                <p className="text item__text">
                  Время вкусной еды, танцев и поздравлений
                </p>
              </div>
            </li>
            <li className="timing__list-item">
              <div className="item__content">
                <div className="item__title-wrap">
                  <img src={heart__punct} alt="" className="image__punct" />
                  <h3 className="title item__title">
                    23.00 - Завершение вечера
                  </h3>
                </div>
                <p className="text item__text">
                  К сожалению, даже такой волшебный вечер должен закончиться
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
