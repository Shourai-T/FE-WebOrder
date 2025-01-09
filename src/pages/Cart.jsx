import React from 'react';
import '../assets/style/cart.css';
import { cartItems } from '../data/index';
import { useNavigate } from 'react-router-dom';
import useNotification from '../hooks/useNotification';
import Notification from '../components/Notification';

const Cart = () => {
  const navigate = useNavigate()
  // Tính tổng tiền
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseInt(item.price.replace('.', '').replace(' VND', ''));
    return total + itemPrice * item.quantity;
  }, 0);

  const {notification, showNotification } = useNotification()

  const handleOrder = () => {
    showNotification('Gửi đơn thành công!', 'success');
  };

  return (
    <div id="cart">
      <div className="cart-header">
        <h1>Đơn hàng</h1>
      </div>
      <div className="cart-body">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-container">
              <div className="cart-item-quantity">x{item.quantity}</div>
              <div className="cart-item-title">
                <p className="cart-item-title__name">{item.name}</p>
                <p className="cart-item-title__note">{item.note}</p>
              </div>
            </div>
            <div className="cart-item-price">
              <p className="cart-item-price__value">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total-container">
        <div className="cart-total-title">Tổng tiền</div>
        <div className="cart-total-price">{totalPrice.toLocaleString()} VND</div>
      </div>
      <div className="cart-actions">
        <button className="back-button" onClick={() => navigate(-1)}>Quay về</button>
        <button className="send-button" onClick={handleOrder}>Gửi đơn</button>
      </div>
      {notification.message && <Notification {...notification} />}
    </div>
  );
};

export default Cart;
