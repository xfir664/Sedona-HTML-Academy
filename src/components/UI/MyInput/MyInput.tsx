type MyInputType = Readonly<{
  name: string;
  id?: string;
  inputType: string;
  value?: string;
  className?: string;
  children?: any;
  placeholder?: string;
  onClick?: () => any;
  onChange?: (event: any) => any;
  isDisabled?: boolean;
  isRequired?: boolean;
}>;

export default function MyInput(props: MyInputType) {
  const {
    id,
    className,
    value,
    name,
    children,
    inputType,
    onChange,
    onClick,
    placeholder,
    isDisabled,
    isRequired,
  } = props;

  return (
    <label className={className}>
      <div className="input-wrapper">
        <input
          id={id}
          onChange={onChange}
          onClick={onClick}
          type={inputType}
          className="input-action"
          name={name}
          value={value}
          disabled={isDisabled}
          placeholder={placeholder}
          required={isRequired}
        />
        <div className="input-container">{children}</div>
      </div>
    </label>
  );
}
