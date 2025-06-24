import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@/components/UI/MyIcon/MyIcon";
import MyInput from "@/components/UI/MyInput/MyInput";
import styled from "styled-components";

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const MyContainer = styled.div`
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  max-width: 600px;

  & .minmax-container {
    display: flex;
    gap: 2px;
    max-width: 288px;

    & .input-action[name="min"] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    & .input-action[name="max"] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const MyFieldset = styled.fieldset`
  display: flex;
  margin: 0;
  padding: 0;
  border: 0;

  & .fieldset-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  & .btn-container {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 32px;

    & .btn {
      padding: 8px 50px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

const FieldsetTitle = styled.legend`
  padding: 0;
  color: #ffffff;
`;

const CheckboxInput = styled(MyInput)`
  & .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;

    & .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4px;
      color: #3f5e72;
    }
  }
`;

const RadioInput = styled(MyInput)`
  & .input-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NumberInput = styled(MyInput)`
  & .input-wrapper {
    position: relative;
  }

  & .input-action {
    padding: 12px 20px;
    padding-right: 44px;
    max-width: 143px;

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & .input-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    font-size: 18px;
    line-height: 24px;
    opacity: 0.6;
  }
`;

const ToggleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);

  & .toggle-width {
    position: absolute;
    background-color: #ffffff;
    width: calc(100% - 20px);
    height: 100%;
  }

  & .toggle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function FormFilter() {
  return (
    <MyForm action="#" method="post">
      <MyContainer>
        <MyFieldset>
          <div className="fieldset-container">
            <FieldsetTitle>Инфраструктура:</FieldsetTitle>
            <InputList className="list m-0">
              <li className="checkbox-item">
                <CheckboxInput
                  className="checkbox checkbox--base"
                  name={""}
                  inputType="checkbox"
                >
                  <MyIcon
                    width="12"
                    height="9"
                    className="icon"
                    id="active"
                  ></MyIcon>
                  <div>Бассейн</div>
                </CheckboxInput>
              </li>
              <li className="checkbox-item">
                <CheckboxInput
                  className="checkbox checkbox--base"
                  name={""}
                  inputType="checkbox"
                >
                  <MyIcon
                    width="12"
                    height="9"
                    className="icon"
                    id="active"
                  ></MyIcon>
                  <div>Бассейн</div>
                </CheckboxInput>
              </li>
              <li className="checkbox-item">
                <CheckboxInput
                  className="checkbox checkbox--base"
                  name={""}
                  inputType="checkbox"
                >
                  <MyIcon
                    width="12"
                    height="9"
                    className="icon"
                    id="active"
                  ></MyIcon>
                  <div>Бассейн</div>
                </CheckboxInput>
              </li>
            </InputList>
          </div>
        </MyFieldset>
        <MyFieldset>
          <div className="fieldset-container">
            <FieldsetTitle>Тип жилья:</FieldsetTitle>
            <InputList className="list m-0">
              <li className="item">
                <RadioInput
                  className="radio radio--base"
                  name={"appartmens"}
                  inputType="radio"
                  isChecked={true}
                >
                  <div>Бассейн</div>
                </RadioInput>
              </li>
              <li className="item">
                <RadioInput
                  className="radio radio--base"
                  name={"appartmens"}
                  inputType="radio"
                >
                  <div>Бассейн</div>
                </RadioInput>
              </li>
              <li className="item">
                <RadioInput
                  className="radio radio--base"
                  name={"appartmens"}
                  inputType="radio"
                >
                  <div>Бассейн</div>
                </RadioInput>
              </li>
            </InputList>
          </div>
        </MyFieldset>
      </MyContainer>
      <MyContainer>
        <MyFieldset>
          <div className="fieldset-container">
            <FieldsetTitle>Стоимость, ₽:</FieldsetTitle>
            <div className="minmax-container">
              <NumberInput
                className="input input--base"
                name={`min`}
                inputType="number"
              >
                От
              </NumberInput>
              <NumberInput
                className="input input--base"
                name={`max`}
                inputType="number"
              >
                До
              </NumberInput>
            </div>
            <ToggleContainer>
              <div className="toggle-width">
                <MyBtnLink className="btn toggle toggle-min" UIType="btn">
                  <div className="visually-hidden">min</div>
                </MyBtnLink>
                <MyBtnLink
                  className="btn toggle toggle-min"
                  style={{
                    left: "calc(100% - 20px)",
                  }}
                  UIType="btn"
                >
                  <div className="visually-hidden">min</div>
                </MyBtnLink>
              </div>
            </ToggleContainer>
          </div>
        </MyFieldset>
        <MyFieldset>
          <div className="btn-container">
            <MyBtnLink className="btn btn--primary" UIType="btn">
              Применить
            </MyBtnLink>
            <MyBtnLink className="btn btn--secondary" UIType="btn">
              Сбросить
            </MyBtnLink>
          </div>
        </MyFieldset>
      </MyContainer>
    </MyForm>
  );
}
