import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import TransitionContext from 'context/TransitionContext'
import Hero from 'components/hero/Hero'

import style from './NextArticleTeaser.module.scss'

export default function NextArticleTeaser(props) {
  const transitionContext = useContext(TransitionContext)
  const teaserRef = useRef()
  const handleClick = () => {
    transitionContext.article.setTeaserRect(
      teaserRef.current.getBoundingClientRect()
    )
  }

  return (
    <div className={style.nextArticleTeaser} ref={teaserRef}>
      <Hero src={props.src} title={props.title} teaser={true} />
      <Link to={props.to} className={style.teaserLink} onClick={handleClick}>
        {props.title}
      </Link>
    </div>
  )
}

NextArticleTeaser.defaultProps = {}
