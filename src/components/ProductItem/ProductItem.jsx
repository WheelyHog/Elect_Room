import React from 'react'
import s from './ProductItem.module.css'
import bars from './assets/bar-chart-2.png'
import heart from './assets/heart.png'
import NewSign from '../NewSign/NewSign'
import { novelties_list } from '../../data/data'

export default function ProductItem() {

  const { tag, title, price, discount_price, in_stock, image } = novelties_list[0]

  return (
    <div className={s.product_item}>
      <div className={s.top_signs}>
        <div className={s.tag}><NewSign tag={tag} /></div>
        <div className={s.add_to}>
          <img src={bars} alt='bars' className={s.bars} />
          <img src={heart} alt='heart' />
        </div>
      </div>
      <img src={require('../OffersSection/assets/news/' + image)} alt='product_image' />
      <div className={s.color_bars}>
        <div className={s.bar_item}></div>
        <div className={s.bar_item_active}></div>
        <div className={s.bar_item}></div>
        <div className={s.bar_item}></div>
      </div>
      <p className={s.product_title}>{title}</p>
      <div className={s.properties}>
        <p className={s.discount_price}>{discount_price} $</p>
        <p className={s.price}>{price} $</p>
        <p className={s.in_stock}>{in_stock ? 'in stock' : 'not in stock'}</p>
      </div>

    </div>
  )
}
