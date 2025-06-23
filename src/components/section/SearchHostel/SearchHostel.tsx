import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import styled from "styled-components";

const MySection = styled.section`
  padding: 96px 304px;
  text-align: center;
`;

const MyBtn = styled(MyBtnLink)`
  padding: 8px 50px;
  font-size: 20px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
`;

export default function SearchHostel() {
  return (
    <MySection>
      <h2
        className="title m-0"
        style={{ marginBottom: "20px", textTransform: "uppercase" }}
      >
        Заинтересовались?
      </h2>
      <p className="description m-0" style={{ marginBottom: "54px" }}>
        Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения
        гостиниц в Седоне
      </p>
      <MyBtn className="btn btn--base" UIType="btn" btnType="button">
        ПОИСК ГОСТИНИЦЫ В седоне
      </MyBtn>
    </MySection>
  );
}
