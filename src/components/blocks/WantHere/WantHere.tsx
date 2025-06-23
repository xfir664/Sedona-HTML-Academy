import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import styled from "styled-components";

const MyContainer = styled.div``;

const WantHereBtn = styled(MyBtnLink)`
  padding: 8px 34px;
  text-transform: uppercase;
  font-weight: 700;
`;

export default function WantHere() {
  return (
    <MyContainer>
      <WantHereBtn className="btn btn--base" btnType="button" UIType="btn">
        Хочу сюда!
      </WantHereBtn>
    </MyContainer>
  );
}
