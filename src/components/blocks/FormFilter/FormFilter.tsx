import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import styled from "styled-components";

export default function FormFilter() {
  return (
    <form action="#" method="post">
      <fieldset>
        <legend>Инфраструктура:</legend>
        <ul className="ckeckbox-list">
          <li className="checkbox-item">
            <input type="checkbox" />
          </li>
          <li className="checkbox-item">
            <input type="checkbox" />
          </li>
          <li className="checkbox-item">
            <input type="checkbox" />
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Тип жилья:</legend>
        <ul className="radio-list">
          <li className="radio-item">
            <input type="radio" />
          </li>
          <li className="radio-item">
            <input type="radio" />
          </li>
          <li className="radio-item">
            <input type="radio" />
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Стоимость, ₽:</legend>
        <ul className="ckeckbox-list">
          <li className="checkbox-item">
            <input type="text" />
          </li>
          <li className="checkbox-item">
            <input type="text" />
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Инфраструктура:</legend>
        <ul className="ckeckbox-lust">
          <li className="checkbox-item">
            <input type="button" />
          </li>
          <li className="checkbox-item">
            <input type="button" />
          </li>
        </ul>
      </fieldset>
    </form>
  );
}
