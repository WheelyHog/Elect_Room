import React from 'react'
import s from './BrandSliderItem.module.css'

export default function BrandSliderItem({ image, title }) {
  return (
    <div>
      <img src={image} alt={title} className={s.slider_item} />
    </div>
  )
}
