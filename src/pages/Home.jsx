import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/homepage.css';
import searchicon from '../assets/img/seach-icon.png';
import drinkimg from '../assets/img/drinkimg.jpg';
import { itemsData } from '../data';

const Home = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div id="home">
      <div className="home-header">
        <span className="material-symbols-outlined" onClick={() => navigate('/cart')}>shopping_bag</span>
        <div className="home-content main-color">
          <h1>ABC CAFE</h1>
          <p>Hân hạnh được phục vụ quý khách</p>
        </div>
        <div className="home-header__search">
          <input type="text" placeholder="Tìm món..." />
          <img src={searchicon} alt="Search Icon" />
        </div>
      </div>
      <div className="home-body">
        {itemsData.map((category) => (
          <div className="item-container" key={category.title}>
            <h1>{category.title}</h1>
            <div className="item-list">
              {category.items.map((item) => (
                <div
                  className="item"
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.image} alt={item.name} />
                  <p className="item-name">{item.name}</p>
                  <p className="price">{item.price} VND</p>
                </div>
              ))}
              <div className="layer"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
