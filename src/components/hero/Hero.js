import React from 'react'

import style from './Hero.module.scss'

export default function Hero(props) {
  return (
    <div className={style.hero}>
      <h1 className={style.heading}>{props.title}</h1>
      <img src={props.src} alt={props.title} />
    </div>
  )
}

Hero.defaultProps = {}
