import React from 'react'

import Constrain from 'components/layout/Constrain'

export default function ArticleTemplate(props) {
  return (
    <div>
      <div>{props.hero}</div>
      <Constrain>{props.content}</Constrain>
    </div>
  )
}
