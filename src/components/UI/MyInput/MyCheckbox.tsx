import MyIcon from "../MyIcon/MyIcon";

type MyCheckboxType = Readonly<{
  name: string;
  value?: string;
  className?: string;
  children?: any;
  iconId?: string;
}>;

export default function MyCheckbox(props: MyCheckboxType) {
  const { iconId, className, value, name, children } = props;

  return (
    <label className={className}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox-btn"
          name={name}
          value={value}
        />
        {iconId && <MyIcon className="checkbox-icon" id={iconId}></MyIcon>}
      </div>
      <span className="checkbox-label">{children}</span>
    </label>
  );
}
