import React from 'react'

import style from './Layout.module.scss'

export default function Constrain(props) {
  return <div className={style.constrain}>{props.children}</div>
}
