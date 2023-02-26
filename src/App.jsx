import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import "./App.scss";
import toast from "react-hot-toast";

const city = [
  { value: "تهران", label: "تهران" },
  { value: "اهواز", label: "اهواز"},
  { value: "مشهد", label: "مشهد" },
  { value: "تبریز", label: "تبریز" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "شیراز", label: "شیراز" },
];

function App() {
  const [start, setStart] = useState("null");
  const [end, setEnd] = useState("null");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [items, setItems] = useState("");

  const handleChangeFirstDate = (first) => setFirst(first);
  const handleChangeSecondDate = (second) => setSecond(second);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (start.value === end.value) {
      toast.error("مبدا و مقصد یکسان است");
    } else {
      setItems({
        start: start.value,
        end: end.value,
        first,
        second,
        hours: new Date().getHours(),
        minute: new Date().getMinutes(),
      });
    }
  };

  const handleRemoveCart = () => {
    setItems("");
  };

  return (
    <section className="header">
      <div className="header-container">
        <h4 className="header-container__title">بلیط هواپیما</h4>
        <p className="header-container__subtitle">
          از تمامی شهر های ایران میتوانید بلیط خود را تهیه کنید
        </p>
        <form className="header-container__box">
          <div className="header-container__box-items">
            <label htmlFor="">شهر مبدا</label>
            <Select
              required
              className="header-container__box-items-input"
              onChange={setStart}
              defaultValue={start}
              options={city}
              placeholder={"شهر مبدا"}
            />
          </div>
          <div className="header-container__box-items">
            <label htmlFor="">شهر مقصد</label>
            <Select
              required
              className="header-container__box-items-input"
              onChange={setEnd}
              defaultValue={end}
              options={city}
              placeholder={"شهر مقصد"}
            />
          </div>
          <div className="header-container__box-items">
            <label htmlFor="">تاریخ رفت</label>
            <DatePicker
              inputClass="header-container__box-items-input"
              value={first}
              onChange={handleChangeFirstDate}
              placeholder={"تاریخ رفت"}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>
          <div className="header-container__box-items">
            <label htmlFor="">تاریخ برگشت</label>
            <DatePicker
              value={second}
              onChange={handleChangeSecondDate}
              inputClass="header-container__box-items-input"
              placeholder={"تاریخ برگشت"}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>
          <button
            className={"header-container__box-btn"}
            onClick={handleSubmit}
          >
            تایید
          </button>
        </form>
        <Cart items={items} onRemove={handleRemoveCart} />
      </div>
    </section>
  );
}

export default App;
