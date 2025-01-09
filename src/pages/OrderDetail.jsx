import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/style/detailorder.css';
import { itemsData } from '../data';
import notiimg from '../assets/img/notification.png'
import 'boxicons';
import useNotification from '../hooks/useNotification';
import Notification from '../components/Notification';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tìm item theo id
  const item = itemsData
    .flatMap((category) => category.items)
    .find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Sản phẩm không tồn tại!</p>;
  }

  // Quản lý số lượng
  const [quantity, setQuantity] = useState(1);

  // Hàm giảm số lượng (không giảm dưới 1)
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Hàm tăng số lượng
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const {notification, showNotification } = useNotification()

  const handleAddToCart = () => {
    showNotification('Thêm vào giỏ thành công!', 'success');
  };

  return (
    <div id="detail-order">
      <span className="material-symbols-outlined" onClick={() => navigate('/cart')}>shopping_bag</span>
      <div className="container">
        <img src={item.image} alt={item.name} />
        <div className="item-container">
          <div className="item-detail">
            <div className="item-detail__content">
              <p className="item-detail__name">{item.name}</p>
              <p className="item-detail__price">{item.price} VND</p>
            </div>
            <div className="quantity-control">
              <button className="quantity-control__button quantity-control__button--decrease"
              onClick={handleDecrease}
              >
                <box-icon name="minus" color="#ffffff"></box-icon>
              </button>
              <p className="quantity-control__number">{quantity}</p>
              <button className="quantity-control__button quantity-control__button--increase"
              onClick={handleIncrease}
              >
                <box-icon name="plus" color="#ffffff"></box-icon>
              </button>
            </div>
          </div>
          <div className="note-section">
            <h3>Ghi chú</h3>
            <textarea placeholder="Nhập ghi chú tại đây..."></textarea>
          </div>
          <div className="order-actions">
            <button className="back-button" onClick={() => navigate(-1)}>
              Quay về
            </button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Thêm vào giỏ</button>
          </div>
        </div>
      </div>
      {notification.message && <Notification {...notification} />}
    </div>
  );
};

export default OrderDetail;
