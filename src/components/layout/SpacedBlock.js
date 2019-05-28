import React from 'react'
import classNames from 'classnames'

import style from './Layout.module.scss'

export default function SpacedBlock(props) {
  const className = classNames(style.spacedBlock, {
    [style.narrow]: props.size === 'narrow',
    [style.regular]: props.size === 'regular',
    [style.wide]: props.size === 'wide'
  })

  return <div className={className}>{props.children}</div>
}

SpacedBlock.defaultProps = {
  size: 'wide'
}
