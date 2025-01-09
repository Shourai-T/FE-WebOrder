import React from 'react'
import NotFoundImg from '../assets/img/404.png'
import '../assets/style/notfound.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div id='error'>
      <img src={NotFoundImg} alt="" />
      <p className='title'>Bạn đã nhập đúng đường dẫn chứ?</p>
      <p className='content'>Đường dẫn bạn vừa nhập không tồn tại</p>
      <button onClick={() => navigate('/')}>Quay về trang menu</button>
    </div>
  )
}

export default NotFound