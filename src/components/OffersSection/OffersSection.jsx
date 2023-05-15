import React from 'react';
import s from './OffersSection.module.css';
import { offers_menu } from '../../data/data';
import ProductItem from '../ProductItem/ProductItem';

export default function OffersSection() {
  return (
    <>
      <div className={s.offers_section}>
        <div className='container'>
          <div className={s.offers_section_inner}>
            {offers_menu.map(elem => <h2 className={elem.active ? s.offers_title_active : s.offers_title} key={elem.id}>{elem.title}</h2>)}
          </div>
        </div>

      </div>
      <div className={s.tab_inner}>
        <div className='container'>
          <ProductItem />
        </div>

      </div>
    </>
  )
}
