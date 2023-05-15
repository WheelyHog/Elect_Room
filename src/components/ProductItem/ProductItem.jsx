import React from 'react'
import s from './ProductItem.module.css'
import bars from './assets/bar-chart-2.png'
import heart from './assets/heart.png'
import NewSign from '../NewSign/NewSign'
import { novelties_list } from '../../data/data'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'

export default function ProductItem({ tag, title, price, discount_price, in_stock, image }) {

  return (
    <div className={s.product_item}>
      <div className={s.top_signs}>
        <div className={s.tag}><NewSign tag={tag} /></div>
        <div className={s.add_to}>
          <img src={bars} alt='bars' className={s.bars} />
          <img src={heart} alt='heart' />
        </div>
      </div>
      <img src={require('../OffersSection/assets/news/' + image)} alt='product_image' className={s.product_img} />
      <div className={s.color_bars}>
        <div className={s.bar_item}></div>
        <div className={s.bar_item_active}></div>
        <div className={s.bar_item}></div>
        <div className={s.bar_item}></div>
      </div>
      <p className={s.product_title}>{title}</p>
      <div className={s.properties}>
        <div className={s.price_box}>
          <p className={s.discount_price}>{discount_price} $</p>
          <p className={s.price}>{price} $</p>
        </div>
        <div className={s.stock}>
          {in_stock && <img src={require('./assets/check.png')} className={s.stock_img} alt='stock_img' />}
          <p className={s.in_stock}>{in_stock ? 'in stock' : 'not in stock'}</p>
        </div>
      </div>
      <AddToCartBtn />
    </div>
  )
}
