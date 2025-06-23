import FormFilter from "@/components/blocks/FormFilter/FormFilter";
import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import styled from "styled-components";

const MySection = styled.section`
  padding: 35px 70px;
  padding-bottom: 70px;
  background-image: url("./img/hero-background@2x.webp");
  background-repeat: no-repeat;
  background-size: cover;

  & .title {
    color: #ffffff;
  }
`;

export default function FilterSection() {
  return (
    <MySection>
      <div className="section-container">
        <h2 className="title title--primary m-0">Гостиницы Седоны</h2>
        <ul className="bredcrums-list">
          <li>
            <MyBtnLink className="navlink navlink--primary" UIType="navlink">
              <span className="visually-hidden">Home</span>
            </MyBtnLink>
          </li>
          <li>
            <MyBtnLink className="navlink navlink--primary" UIType="navlink">
              Гостиницы
            </MyBtnLink>
          </li>
        </ul>
      </div>
      <FormFilter></FormFilter>
    </MySection>
  );
}
