import s from "./MySelect.module.scss";

type OptionType = {
  id: string | number;
  value: string | number;
  title: string;
};

type MySelectType = Readonly<{
  name: string;
  className?: string;
  children?: any;
  style?: object;
  data?: OptionType[];
}>;

export default function MySelect(props: MySelectType) {
  const { className, children, data, style, name } = props;

  console.log(s);

  return (
    <label
      style={style}
      className={`${s["select"]} ${s["select--base"]} ${className ?? ""}`}
    >
      <div className="select-wrapper">
        <select name={name} className={s[`select-action`]}>
          {data?.map((el: any) => {
            return (
              <option key={el.id} className="select-option" value={el.value}>
                {el.title}
              </option>
            );
          })}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="select-container">{children}</div>
      </div>
    </label>
  );
}
