import React from 'react'
import SocialIconItem from '../SocialIconItem/SocialIconItem'
import s from './SocialIconList.module.css'

const social_icons = [
  {
    id: 1,
    title: 'instagram',
    image: './social/instagram.png',
    link: '#'
  },
  {
    id: 2,
    title: 'vk',
    image: './social/vk.png',
    link: '#'
  },
  {
    id: 3,
    title: 'facebook',
    image: './social/fb.png',
    link: '#'
  }
]

export default function SocialIconList() {
  return (
    <div className={s.social_icon_list}>
      {social_icons.map(elem => <SocialIconItem key={elem.id} {...elem} />)}
    </div>
  )
}
