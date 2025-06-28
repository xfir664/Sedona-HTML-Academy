import MyIcon from "@/components/UI/MyIcon/MyIcon";
import styled from "styled-components";

const ToggleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 160px;
  gap: 8px;

  & .item {
    padding: 17px 16px;
    box-shadow: 0 0 0 1px #000000;
    border-radius: 4px;
  }
`;

export default function CatalogViewToggle() {
  return (
    <ToggleList className="list m-0">
      <li className="item" style={{}}>
        <MyIcon width="16" height="14" id={`toggle-plite`}></MyIcon>
      </li>
      <li className="item">
        <MyIcon width="16" height="14" id={`toggle-simple`}></MyIcon>
      </li>
      <li className="item">
        <MyIcon width="16" height="14" id={`toggle-list`}></MyIcon>
      </li>
    </ToggleList>
  );
}
