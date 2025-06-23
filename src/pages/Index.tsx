import PromoBlock from "@/components/section/PromoBlock/PromoBlock";
import Advantages from "@/components/section/Advantages/Advantages";
import Features from "@/components/section/Features/Features";
import SearchHostel from "@/components/section/SearchHostel/SearchHostel";
import Subscribe from "@/components/section/Subscribe/Subscribe";

export default function Index() {
  return (
    <>
      <PromoBlock></PromoBlock>
      <Advantages></Advantages>
      <Features></Features>
      <SearchHostel></SearchHostel>
      <Subscribe className="primary"></Subscribe>
    </>
  );
}
