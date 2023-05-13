import React from 'react'
import s from './TopHeader.module.css'
import Logo from '../Logo/Logo'
import { top_menu_items } from '../../data/data'


export default function TopHeader() {
  return (
    <div className={s.top_header}>
      <div className='container'>
        <div className={s.top_header_inner}>
          <div className={s.left_part}>
            <Logo />
            <p className={s.hours}>Working hours: 10:00 - 20:00</p>
            <div className={s.phones}>
              <p className={s.phone}>+7 495 120-32-14</p>
              <p className={s.order_call}>Order call</p>
            </div>
          </div>
          <div className={s.top_menu}>
            {top_menu_items.map(elem => <img src={elem.image} alt={elem.title} key={elem.id} />)}
          </div>
          <p className={s.total}>Total sum</p>
        </div>
      </div>
    </div>
  )
}
