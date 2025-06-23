export default function MyModal() {
  return (
    <div>
      <button>close</button>
      <h2>Поиск гостиницы в Седоне</h2>
      <form action="#">
        <fieldset>
          <legend>Дата заезда:</legend>
          <span>Дата заезда:</span>
          <input type="text" />
          <span>1 сентября 2023</span>
          <span>error</span>
        </fieldset>
        <fieldset>
          <legend>Дата выезда::</legend>
          <span>Дата выезда::</span>
          <input type="text" />
          <span>1 сентября 2023</span>
          <span>error</span>
        </fieldset>
        <fieldset>
          <legend>Чтото:</legend>
          <div>
            <span>Взрослые:</span>
            <button>minus</button>
            <input type="text" />
            <button>plus</button>
            <span>error</span>
          </div>
          <div>
            <span>Дети:</span>
            <div>PopUP</div>
            <button>minus</button>
            <input type="text" />
            <button>plus</button>
            <span>error</span>
          </div>
        </fieldset>
        <button>Найти</button>
      </form>
    </div>
  );
}
