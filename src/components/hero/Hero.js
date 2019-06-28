import React from 'react'
import classNames from 'classnames'

import style from './Hero.module.scss'

export default function Hero(props) {
  return (
    <div className={classNames(style.hero, { [style.isTeaser]: props.teaser })}>
      <h1 className={style.heading}>{props.title}</h1>
      <img src={props.src} alt={props.title} />
    </div>
  )
}

Hero.defaultProps = {
  teaser: false
}

Hero.propTypes = {}
