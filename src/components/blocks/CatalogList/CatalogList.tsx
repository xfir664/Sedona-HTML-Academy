import styled from "styled-components";
import CatalogItem from "../CatalogItem/CatalogItem";

const MyList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 80px;

  &::before {
    content: "";
    position: absolute;
    bottom: -40px;
    width: 100%;
    height: 2px;
    background-color: #e6e6e6;
  }
`;

export default function CatalogList() {
  return (
    <MyList className="list m-0">
      <CatalogItem></CatalogItem>
    </MyList>
  );
}
