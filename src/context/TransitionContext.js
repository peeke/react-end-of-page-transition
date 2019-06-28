import React, { PureComponent } from 'react'

const Context = React.createContext()

export default Context

export class TransitionContextProvider extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      article: {
        teaserRect: { x: 0, y: 0 },
        setTeaserRect: this.setTeaserRect
      }
    }
  }

  setTeaserRect = rect => {
    const article = { ...this.state.article }
    article.teaserRect = rect
    this.setState({ article })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
