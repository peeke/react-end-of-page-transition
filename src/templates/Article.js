import React from 'react'

import style from './Article.module.scss'
import Constrain from 'components/layout/Constrain'

export default function Article(props) {
  return (
    <div className={style.article}>
      <Hero>Title</Hero>
      <Constrain>Text</Constrain>
    </div>
  )
}
