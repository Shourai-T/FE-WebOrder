import React from 'react';
import '../assets/style/notification.css';
import notiimg from '../assets/img/notification.png'

const Notification = ({ message, type }) => {
    if (!message) return null;
    return (
        <div className={`notification ${type} show`}>
            <img src={notiimg} alt="Notification Icon" />
            <p>{message}</p>
        </div>
    );
};

export default Notification;
