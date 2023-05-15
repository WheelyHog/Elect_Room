import React from 'react'
import s from './NewSign.module.css'

export default function NewSign({ tag }) {
  return (
    <div className={s.new_sign}>
      {tag}
    </div>
  )
}
