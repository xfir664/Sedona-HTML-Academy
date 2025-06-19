import MyIcon from "@components/UI/MyIcon/MyIcon";

type MyInputType = Readonly<{
  name: string;
  id?: string;
  inputType: "radio" | "input" | "checkbox";
  value?: string;
  className?: string;
  children?: any;
  iconId?: string;
  onClick?: () => any;
  onChange?: () => any;
  isDisabled?: boolean;
}>;

export default function MyInput(props: MyInputType) {
  const {
    iconId,
    id,
    className,
    value,
    name,
    children,
    inputType,
    onChange,
    onClick,
    isDisabled,
  } = props;

  return (
    <label className={className}>
      <div className="input-wrapper">
        <input
          id={id}
          onChange={onChange}
          onClick={onClick}
          type={inputType}
          className="input-btn"
          name={name}
          value={value}
          disabled={isDisabled}
        />
        {iconId && <MyIcon className="input-icon" id={iconId}></MyIcon>}
      </div>
      <span className="input-label">{children}</span>
    </label>
  );
}
