import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import "./style.css";

export default function Anketa() {
  const [isComing, setComing] = useState(null);
  const [isNameContent, setNameContent] = useState("");
  const [isNameContentTwo, setNameContentTwo] = useState("");
  const [showPlaceholderInputFio, setShowPlaceholderInputFio] = useState(true);
  const [showPlaceholderInputFioTwo, setShowPlaceholderInputFioTwo] =
    useState(true);
  const [isChecked, setChecked] = useState(false);
  const [isValid, setValid] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    coming: "",
    together: "",
    agreement: "",
  });
  const myElementRef = useRef(null);

  const handleComingChange = (value) => {
    setComing(value);
  };
  const handleFocusInputFio = () => {
    setShowPlaceholderInputFio(false);
  };

  const handleBlurInputFio = () => {
    if (isNameContent === "") {
      setShowPlaceholderInputFio(true);
    }
  };
  const handleFocusInputFioTwo = () => {
    setShowPlaceholderInputFioTwo(false);
  };

  const handleBlurInputFioTwo = () => {
    if (isNameContentTwo === "") {
      setShowPlaceholderInputFioTwo(true);
    }
  };
  const CheckForm = () => {
    if (isNameContent !== "" && isComing !== null && isChecked) {
      setValid(true);
      const formData = {
        name: isNameContent,
        coming: isComing,
        together: isNameContentTwo === "" ? "-" : isNameContentTwo,
        agreement: `Я, ${isNameContent}, даю свое согласие на обработку персональных данных `,
      };
      handleSubmit({ preventDefault: () => {} }, formData);
      setForm(formData);
      console.log(formData);
    } else {
      setValid(false);
      notifications.show({
        title: "Ошибка!",
        message: "Пожалуйста, заполните все обязательные поля",
        color: "#a25c56",
        withBorder: true,
      });
    }
  };

  const handleSubmit = async (e, formData = form) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    try {
      const response = await axios.post(
        "http://artemand:8443/send-to-telegram",
        formData
      );

      if (response.data.success) {
        notifications.show({
          title: "Подтверждение отправлено!",
          message: "До скорой встречи",
          color: "green",
          withBorder: true,
        });
      }
    } catch (error) {
      notifications.show({
        title: "Ошибка отправки!",
        message: "Что-то пошло не так",
        color: "red",
        withBorder: true,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Параметры наблюдения
    );

    if (myElementRef.current) {
      observer.observe(myElementRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={myElementRef}
      className={`anketa ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="anketa__wrapper">
          <h2 className="title anketa__title">Анкета</h2>
          <div className="anketa__form">
            <div
              className={`anketa__form-fio ${
                isNameContent === "" && isValid === false ? "required" : ""
              }`}
            >
              <p className="title title__fio">Напишите, пожалуйста, Ваше ФИО</p>
              <input
                type="text"
                value={isNameContent}
                onChange={(e) => setNameContent(e.target.value)}
                onFocus={handleFocusInputFio}
                onBlur={handleBlurInputFio}
                placeholder={showPlaceholderInputFio ? "Ваша ФИО" : ""}
                className="input__fio"
              />
              <span className="input__fio-msg">
                Пожалуйста, введите Ваше имя
              </span>
            </div>
            <div
              className={`anketa__form-fio--2 ${
                isComing === "Буду со своей парой" ? "visible" : ""
              }`}
            >
              <p className="title title__fio">
                Укажите ФИО того, кто с вами придет
              </p>
              <input
                type="text"
                value={isNameContentTwo}
                onChange={(e) => setNameContentTwo(e.target.value)}
                onFocus={handleFocusInputFioTwo}
                onBlur={handleBlurInputFioTwo}
                placeholder={showPlaceholderInputFioTwo ? "ФИО Вашей пары" : ""}
                className="input__fio"
              />
              <span className="input__fio-msg--2">
                Пожалуйста, введите ФИО Вашей пары
              </span>
            </div>
            <div
              className={`anketa__form-radio ${
                isComing === null && isValid === false ? "required" : ""
              }`}
            >
              <p className="title title__radio">
                Сможете ли присутствовать на нашем торжестве?
              </p>
              <div className="form__radio-wrap">
                <RadioButton
                  label=" Я с удовольствием приду"
                  name="isComing"
                  value="Я с удовольствием приду"
                  checked={isComing === "Я с удовольствием приду"}
                  onChange={() => handleComingChange("Я с удовольствием приду")}
                  color="#530d09"
                />
                <RadioButton
                  label=" Буду со своей парой"
                  name="isComing"
                  value="Буду со своей парой"
                  checked={isComing === "Буду со своей парой"}
                  onChange={() => handleComingChange("Буду со своей парой")}
                  color="#530d09"
                />
                <RadioButton
                  label=" К сожалению, не смогу присутствовать"
                  name="isComing"
                  value="К сожалению, не смогу присутствовать"
                  checked={isComing === "К сожалению, не смогу присутствовать"}
                  onChange={() =>
                    handleComingChange("К сожалению, не смогу присутствовать")
                  }
                  color="#530d09"
                />
                <RadioButton
                  label=" Сообщу позже"
                  name="isComing"
                  value="Сообщу позже"
                  checked={isComing === "Сообщу позже"}
                  onChange={() => handleComingChange("Сообщу позже")}
                  color="#530d09"
                />
                <span class="input__radio-msg">
                  Пожалуйста, подтвердите Ваше присутствие
                </span>
              </div>
            </div>
            <div
              className={`form__checkbox-wrapper ${
                isChecked === false && isValid === false ? "required" : ""
              }`}
            >
              <CheckBox
                checked={isChecked}
                onChange={(e) => setChecked(e.target.checked)}
                label=" Я даю свое согласие на "
                color="#530d09"
              />
              <span className="input__checkbox-msg">
                Необходимо Ваше согласие на обработку персональных данных
              </span>
            </div>
            <button onClick={CheckForm} type="button" className="form__btn">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
  color = "#530d09",
  disabledColor = "#530d09",
}) {
  return (
    <label className="radio__button">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span
        className="radio-button__custom"
        style={{
          "--active-color": color,
          "--disabled-color": disabledColor,
        }}
      ></span>
      {label}
    </label>
  );
}
function CheckBox({
  checked,
  onChange,
  label,
  color,
  disabledColor = "#530d09",
}) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form__input-checkbox"
      />
      <span
        className="checkbox__custom"
        style={{
          "--active-color": color,
          "--disabled-color": disabledColor,
        }}
      ></span>
      <div className="checkbox__container">
        {label}
        <Link to="/processing" className="link__pdn">
          обработку персональных данных
        </Link>
      </div>
    </label>
  );
}
