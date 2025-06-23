import MyBtnLink from "@/components/UI/MyBtnLink/MyBtnLink";
import MyIcon from "@/components/UI/MyIcon/MyIcon";
import styled from "styled-components";
import { nanoid } from "nanoid";

const MySocialList = styled.ul`
  display: flex;
  max-width: 300px;
`;

const SocialBtn = styled(MyBtnLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 40px;
`;

const SocialIcon = styled(MyIcon)`
  &.social-vk {
    width: 24px;
    height: 12px;
  }

  &.social-tg {
    width: 24px;
    height: 12px;
  }

  &.social-youtube {
    width: 24px;
    height: 12px;
  }
`;

export default function SocialList() {
  const SOCIAL_DATA = [
    {
      id: nanoid(),
      title: "vk",
      iconId: "social-vk",
    },
    {
      id: nanoid(),
      title: "vk",
      iconId: "social-tg",
    },
    {
      id: nanoid(),
      title: "vk",
      iconId: "social-youtube",
    },
  ];

  return (
    <MySocialList className="list m-0">
      {SOCIAL_DATA.map((el) => {
        return (
          <li key={el.id} className="social-item">
            <SocialBtn className="link" UIType="link">
              <SocialIcon
                className={`icon icon--base ${el.iconId}`}
                id={el.iconId}
              />
            </SocialBtn>
          </li>
        );
      })}
    </MySocialList>
  );
}
