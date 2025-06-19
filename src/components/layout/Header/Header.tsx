import MyInput from "@/components/UI/MyInput/MyInput";

export default function Header() {
  return (
    <header className="grid-layout">
      <MyInput inputType={"checkbox"} name="name">
        Name
      </MyInput>
      <MyInput inputType={"radio"} name="name">
        Name
      </MyInput>
      <MyInput inputType={"input"} name="name">
        Name
      </MyInput>
    </header>
  );
}
