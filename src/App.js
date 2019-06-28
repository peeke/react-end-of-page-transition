import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import { TransitionContextProvider } from 'context/TransitionContext'

import Article1 from 'pages/Article1'
import Article2 from 'pages/Article2'
import Article3 from 'pages/Article3'

const WrappedRoute = withRouter(props => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location.pathname])

  return <Route {...props} />
})

function App() {
  return (
    <TransitionContextProvider>
      <Router>
        <WrappedRoute exact path={['/', '/page1']} component={Article1} />
        <WrappedRoute exact path="/page2" component={Article2} />
        <WrappedRoute exact path="/page3" component={Article3} />
      </Router>
    </TransitionContextProvider>
  )
}

export default App
