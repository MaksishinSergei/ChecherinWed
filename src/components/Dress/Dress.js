import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import color_1 from "../../assets/color_1.png";
import color_2 from "../../assets/color_2.png";
import color_3 from "../../assets/color_3.png";
import color_4 from "../../assets/color_4.png";
import color_5 from "../../assets/color_5.png";
import color_men_1 from "../../assets/color_men_1.png";
import color_men_2 from "../../assets/color_men_2.png";
import women_1 from "../../assets/women_1.png";
import women_2 from "../../assets/women_2.jpg";
import women_3 from "../../assets/women_3.jpg";
import women_4 from "../../assets/women_4.jpg";
import women_5 from "../../assets/women_5.jpg";
import men_1 from "../../assets/men_1.jpg";
import men_2 from "../../assets/men_2.jpg";
import men_3 from "../../assets/men_3.jpg";
import men_4 from "../../assets/men_4.jpg";
import men_5 from "../../assets/men_5.jpg";

export default function Dress() {
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
      className={`dress ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="dress__wrapper">
          <h2 className="title dress__title">
            Варианты
            <br />
            нарядов
          </h2>
          <div className="dress__content">
            <p className="text dress_content-text">
              Нам будет очень приятно, если вы поддержите нас в создании
              красивого праздника и будете придерживаться определенных оттенков
              при выборе своего наряда.
            </p>
            <div className="dress__code-women">
              <h3 className="title woomen__title">Для девушек</h3>
              <ul className="women__colors">
                <li className="women__colors-item">
                  <img src={color_5} alt="" className="img__color" />
                </li>
                <li className="women__colors-item">
                  <img src={color_1} alt="" className="img__color" />
                </li>
                <li className="women__colors-item">
                  <img src={color_2} alt="" className="img__color" />
                </li>
                <li className="women__colors-item">
                  <img src={color_3} alt="" className="img__color" />
                </li>
                <li className="women__colors-item">
                  <img src={color_4} alt="" className="img__color" />
                </li>
              </ul>
              <ul className="women__examples">
                <li className="women__dress-item">
                  <img src={women_1} alt="" className="img__women" />
                </li>
                <li className="women__dress-item">
                  <img src={women_4} alt="" className="img__women" />
                </li>
                <li className="women__dress-item">
                  <img src={women_3} alt="" className="img__women" />
                </li>
                <li className="women__dress-item">
                  <img src={women_2} alt="" className="img__women" />
                </li>
                <li className="women__dress-item">
                  <img src={women_5} alt="" className="img__women" />
                </li>
              </ul>
            </div>
            <p className="text dress_content-text">
              А белый цвет, пожалуйста, оставьте только для невесты
            </p>
            <div className="dress__code-men">
              <h3 className="title men__title">Для мужчин</h3>
              <ul className="men__colors">
                <li className="men__colors-item">
                  <img src={color_men_1} alt="" className="img__color" />
                </li>
                <li className="men__colors-item">
                  <img src={color_men_2} alt="" className="img__color" />
                </li>
                <li className="men__colors-item">
                  <img src={color_3} alt="" className="img__color" />
                </li>
                <li className="men__colors-item">
                  <img src={color_5} alt="" className="img__color" />
                </li>
              </ul>
              <ul className="men__examples">
                <li className="men__dress-item">
                  <img src={men_1} alt="" className="img__men" />
                </li>
                <li className="men__dress-item">
                  <img src={men_4} alt="" className="img__men" />
                </li>
                <li className="men__dress-item">
                  <img src={men_3} alt="" className="img__men" />
                </li>
                <li className="men__dress-item">
                  <img src={men_2} alt="" className="img__men" />
                </li>
                <li className="men__dress-item">
                  <img src={men_5} alt="" className="img__men" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
