import Hero from "@components/section/Hero/Hero";
import Advantages from "@components/section/Advantages/Advantages";

export default function Main() {
  return (
    <main className="main grid-layout">
      <div className="grid-column-full">
        <Hero></Hero>
        <Advantages></Advantages>
      </div>
    </main>
  );
}
