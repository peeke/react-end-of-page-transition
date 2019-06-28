import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'

import style from './ArticleTemplate.module.scss'

import TransitionContext from 'context/TransitionContext'
import Constrain from 'components/layout/Constrain'

export default function ArticleTemplate(props) {
  const transitionContext = useContext(TransitionContext)
  const { x, y } = transitionContext.article.teaserRect

  const animatedProps = useSpring({
    from: { transform: `translate3d(${x}px,${y}px,0) scale(0.8)` },
    to: { transform: 'translate3d(0,0,0) scale(1.0)' }
  })

  return (
    <div className={style.article}>
      <animated.div style={animatedProps}>{props.hero}</animated.div>
      <Constrain>{props.children}</Constrain>
      <div>{props.teaser}</div>
    </div>
  )
}
