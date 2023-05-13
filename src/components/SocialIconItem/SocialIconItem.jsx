import React from 'react'
import s from './SocialIconItem.module.css'

export default function SocialIconItem({ title, image }) {
  return (
    <div className={s.icon_container}>
      <img src={image} alt={title} />
    </div>
  )
}
