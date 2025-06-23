import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyInput from "@/components/UI/MyInput/MyInput";
import { useState } from "react";
import styled from "styled-components";

type SubscribeType = Readonly<{
  className?: string;
}>;

const MySection = styled.section`
  padding: 96px 258px 104px;
  text-align: center;

  & .wrapper {
    margin: 0 auto;
    max-width: 475px;
  }

  & .title {
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  & .description {
    margin-bottom: 54px;
    color: #333333;
  }

  &.primary {
    color: #ffffff;
    background-image: url("./img/subscribe@2x.webp");
    background-repeat: no-repeat;
    background-size: 100% auto;

    & .description {
      margin-bottom: 54px;
      color: #ffffff;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SubscribeInput = styled(MyInput)`
  position: relative;
  display: flex;
  flex-grow: 1;

  & .input-wrapper {
    width: 100%;

    & .input-action {
      display: flex;
      width: 100%;
      padding: 14px 20px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    & .input-container {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      color: #000000;
      opacity: 0.6;
    }
  }
`;

const SubscribeBtn = styled(MyBtnLink)`
  display: flex;
  padding: 8px 50px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 20px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
`;

export default function Subscribe(props: SubscribeType) {
  const { className } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <MySection className={className}>
      <div className="wrapper">
        <h2 className="title m-0">Подпишитесь на рассылку</h2>
        <p className="description m-0">
          Только полезная информация и никакого спама, честное бойскаутское!
        </p>
      </div>
      <InputContainer>
        <SubscribeInput
          className="input input--base"
          name="subscribe"
          inputType="email"
          isRequired={true}
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        >
          {inputValue.trim() === "" && "Ваш e-mail"}
        </SubscribeInput>
        <SubscribeBtn
          className="btn btn--primary"
          btnType="button"
          UIType="btn"
        >
          Подписаться
        </SubscribeBtn>
      </InputContainer>
    </MySection>
  );
}
