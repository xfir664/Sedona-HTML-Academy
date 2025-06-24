import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@/components/UI/MyIcon/MyIcon";
import styled from "styled-components";

const MyList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
`;

const MyBtn = styled(MyBtnLink)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function BreadCrumsList() {
  return (
    <MyList className="list m-0">
      <li>
        <MyBtn className="navlink navlink--primary" UIType="navlink">
          <MyIcon
            width="13"
            height="15"
            className="icon"
            id={"breadcrums-home"}
            aria-hidden={true}
          ></MyIcon>
        </MyBtn>
        <span className="visually-hidden ">Главная</span>
      </li>
      <li>
        <MyBtn className="navlink navlink--primary" UIType="navlink">
          <MyIcon
            width="8"
            height="19"
            className="icon"
            id={"breadcrums-next"}
            aria-hidden={true}
          ></MyIcon>
          <div>Гостиницы</div>
        </MyBtn>
      </li>
    </MyList>
  );
}
