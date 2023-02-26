import "./Cart.scss";
import Logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import { numberPlaneId } from "../../helpers/randomId.js";

const Cart = ({ items, onRemove }) => {
  const handleCreateCart = () => {
    toast.success("بلیط شما ثبت شد");
  };

  return (
    <>
      {items.first && (
        <div className="cart">
          <div className="cart-right">
            <img src={Logo} alt="logo" />
            <div className="cart-right__number">
              <div>شماره پرواز:</div>
              <p>{numberPlaneId(8)}</p>
            </div>
          </div>
          <div className="cart-left">
            <div className="cart-left__details">
              <div className="cart-left__details-item">
                <div>شهر مبدا :</div>
                <h4> {items.start} </h4>
              </div>
              <div className="cart-left__details-item">
                <div>شهر مقصد :</div>
                <h4> {items.end} </h4>
              </div>
            </div>
            <div className="cart-left__details">
              <div className="cart-left__details-item">
                <div>تاریخ حرکت :</div>
                <h4>
                  {items.first.year}/{items.first.month.number}/
                  {items.first.day}
                </h4>
              </div>
              <div className="cart-left__details-item">
                <div>ساعت حرکت :</div>
                <h4>
                  {" "}
                  {items.minute} : {items.hours}
                </h4>
              </div>
            </div>
            <div className="cart-left__details">
              <div className="cart-left__details-item">
                <div>نام مسافر:</div>
                <h4> سهیل سیدی </h4>
              </div>
              <div className="cart-left__details-item">
                <div>هواپیمایی ایران بال</div>
              </div>
            </div>
            <hr />
            <div className="cart-left__actions">
              <div className="cart-left__actions-price">۱,۵۴۰,۰۰۰ تومان</div>
              <div className="cart-left__actions-btn">
                <button
                  className="cart-left__actions-btn__submit"
                  onClick={handleCreateCart}
                >
                  ثبت بلیط
                </button>
                <button
                  className="cart-left__actions-btn__trash"
                  onClick={onRemove}
                >
                  حذف اطلاعات
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {items.second && (
        <div className="cart">
          <div className="cart-right">
            <img src={Logo} alt="logo" />
            <div className="cart-right__number">
              <div>شماره پرواز:</div>
              <p>{numberPlaneId(8)}</p>
            </div>
          </div>
          <div className="cart-left">
            <div className="cart-left__details">
              <div className="cart-left__details-item">
                <div>شهر مبدا :</div>
                <h4> {items.end} </h4>
              </div>
              <div className="cart-left__details-item">
                <div>شهر مقصد :</div>
                <h4> {items.start} </h4>
              </div>
            </div>
            <div className="cart-left__details">
              <div className="cart-left__details-item">
                <div>تاریخ حرکت :</div>
                <h4>
                  {items.second.year}/{items.second.month.number}/
                  {items.second.day}
                </h4>
              </div>
              <div className="cart-left__details-item">
                <div>ساعت حرکت :</div>
                <h4>
                  {" "}
                  {items.minute} : {items.hours}
                </h4>
              </div>
            </div>
            <div className="cart-left__details">
              <div className="cart-left__details-item">
                <div>نام مسافر:</div>
                <h4> سهیل سیدی </h4>
              </div>
              <div className="cart-left__details-item">
                <div>هواپیمایی ایران بال</div>
              </div>
            </div>
            <hr />
            <div className="cart-left__actions">
              <div className="cart-left__actions-price">۱,۵۴۰,۰۰۰ تومان</div>
              <div className="cart-left__actions-btn">
                <button
                  className="cart-left__actions-btn__submit"
                  onClick={handleCreateCart}
                >
                  ثبت بلیط
                </button>
                <button
                  className="cart-left__actions-btn__trash"
                  onClick={onRemove}
                >
                  حذف اطلاعات
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
